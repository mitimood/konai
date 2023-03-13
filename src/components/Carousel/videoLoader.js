
var feedURL = "https://www.youtube.com/feeds/videos.xml?channel_id=UC7fCYSfauoMDbdBZ9B0ex2Q";
//var feedURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAkHRdQUHiJEwWcXcU7WdBxRLHdsiWw3X8&channelId=UCOgK2xOEXxCr6GnvRyXejqw&part=snippet,id&order=date&maxResults=20";


async function fetchYoutube(){

    try {

        const convert = require('xml-js')
        let res = await fetch(feedURL)

        try {
        let channelXML = await res.text()
        let videosjson = JSON.parse(convert.xml2json(channelXML, {compact: true, spaces: 4})).feed.entry;
        let videos = []
        for( let item of videosjson ){
            videos.push({ title: item.title._text, author: "Kamaitachi", thumb: item["media:group"]["media:thumbnail"]["_attributes"]["url"], video_id: item["yt:videoId"]._text, description: item["media:group"]["media:description"]["_text"] })
        }
        return videos
        
    } catch (error) {
            console.log(error)
        }

    } catch (error) {
        console.log(error)

    }
}

 
export default fetchYoutube