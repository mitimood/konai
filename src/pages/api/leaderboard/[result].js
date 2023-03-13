
import { MongoClient } from 'mongodb';
import {Intents, Client} from "discord.js"

const client = new Client({ intents: 3 })

const mongoClientSite = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const mongoClientBot = new MongoClient(process.env.MONGO_BOT_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const loged = client.login(process.env.BOT_TOKEN)

client.on("ready", async()=>{
    const guild = await client.guilds.fetch("612117634909208576")
    await guild.members.fetch()
    setInterval(async() => {
        await guild.members.fetch()

    }, 3600000 );
})

export default async function XpLeaderBoard(req, res){

    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate')
    await waiting()
    async function waiting(){
        if(client.isReady() && client.users.cache.size > 30000){
            try {
                await mongoClientBot.connect()
    
                const guild = client.guilds.cache.get("612117634909208576")
                const members = mongoClientBot.db('kamaibot').collection('member_management')
                
                let docs = await members.find({$or:[{xp:{$exists:true} }, {"economy.money":{$exists:true}}]}).toArray()
                
                for(const [i, doc] of docs.entries()){
                    try{
                        const user = guild.members.cache.get(doc._id)
                        if(user){
                            doc.user = user
                            docs[i] = doc
                        }else{
                            docs.splice(i, 1)        
                        }
    
                    }catch(err){
                    }
                }
                if(req.query.result == "money"){
                    const moneyDocs = []

                    for(let [i, doc] of docs.entries()){
                        if(doc.economy){
                            if(doc.hasOwnProperty('xp')) delete doc.xp
                            if(doc.hasOwnProperty('warnings')) delete doc.warnings
                            if(doc.hasOwnProperty('roles')) delete doc.roles
                            if(doc.hasOwnProperty("duration")) delete doc.duration
                            if(doc.hasOwnProperty('since')) delete doc.since
                            if(doc.hasOwnProperty('chatMuted')) delete doc.chatMuted
                            moneyDocs.push(doc)
                        }
                    }
                    function compare( a, b ) {
                        if ( a.economy.money > b.economy.money ){
                          return -1;
                        }
                        if ( a.economy.money < b.economy.money ){
                          return 1;
                        }
                        return 0;
                      }
                    moneyDocs.sort( compare )

                    res.json(moneyDocs)

                }else if(req.query.result == "xp"){
                    const xpDocs = []

                    for(let [i, doc] of docs.entries()){
                        if(doc.hasOwnProperty("xp")){
                            if(doc.hasOwnProperty('economy')) delete doc.economy
                            if(doc.hasOwnProperty('warnings')) delete doc.warnings
                            if(doc.hasOwnProperty('roles')) delete doc.roles
                            if(doc.hasOwnProperty("duration")) delete doc.duration
                            if(doc.hasOwnProperty('since')) delete doc.since
                            if(doc.hasOwnProperty('chatMuted')) delete doc.chatMuted
                            
                            doc.xp.global = new Object()
                        
                            doc.xp.global.total = 0
                            doc.xp.global.level = 0
                            
                            if(doc?.xp?.xp_chat){
                                doc.xp.xp_chat = doc.xp.xp_chat * 16

                                doc.xp.global.total =  doc.xp.xp_chat  + doc.xp.global.total
                            }
                            if(doc?.xp?.xp_voice){
                                doc.xp.xp_voice = doc.xp.xp_voice * 14

                                doc.xp.global.total = doc.xp.xp_voice + doc.xp.global.total
                            }
                            let increaseXP = 200
                        
                            let xpUp = increaseXP
                            let xpTotalCalc = doc.xp.global.total
                        
                            while(xpTotalCalc > xpUp){
                                xpTotalCalc -= xpUp
                                xpUp = xpUp + increaseXP
                                doc.xp.global.level++
                            }
                            doc.xp.global.percentage = ( parseInt( ( xpTotalCalc / xpUp ) * 100 ) ) / 100                            

                            xpDocs.push(doc)
                        }
                    }
                    function compare( a, b ) {
                        if ( a.xp.global.total > b.xp.global.total ){
                          return -1;
                        }
                        if ( a.xp.global.total < b.xp.global.total ){
                          return 1;
                        }
                        return 0;
                      }
                    xpDocs.sort( compare )
                    res.json(xpDocs)
                }
            }catch(error){
                console.log(error)
            }finally{
                
            }
        }else{
            await delay(2000)
            await waiting()
        }
    }
    
}


function delay(ms){
    return new Promise(resolve=> setTimeout(resolve, ms))
}