import { MongoClient } from 'mongodb';
const mongoClientSite = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

async function listEvent() {
    try {
        await mongoClientSite.connect()
        const eventManagement = mongoClientSite.db("Site").collection("eventManagement");
        const events = await eventManagement.find().toArray()

        events.shift()
        await mongoClientSite.close()
        // const events = [
        //     {    
        //       _id: 3,
        //       dateSnowflake: 1634236001591,
        //       imageUrl: 'https://media.discordapp.net/attachments/833348207790653461/896463101090754601/PicsArt_10-09-03.23.57.jpg',
        //       name: 'QuizKamaitachi'
        //     },
        //     {
        //       _id: 5,
        //       dateSnowflake: 1634409206129,
        //       imageUrl: 'https://media.discordapp.net/attachments/624079796556529676/896464547790090270/PicsArt_10-09-03.29.38.jpg',
        //       name: 'Qual-é-o-objeto?'
        //     }
        //   ]
        return events
    } catch (error) {
        
    }
}

export default listEvent