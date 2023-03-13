import React from 'react';

import Carousel from '../components/Carousel';
import videosReq from "../components/Carousel/videoLoader"
import listEvent from '../components/Carousel/eventsLoader';
import Videos from '../components/Videos';
import carouselCss from "../components/Carousel/carousel.module.css"
import Navbar from '../components/Navbar';
import Footer from "../components/Footer"


function Home(props){

    return (
        <html>
            <Navbar/>
            <body>
                <Videos videos = {props.videos}/>
            </body>
            <footer>
                <Footer></Footer>
            </footer>
        </html>
        
        )
}

export default Home

export async function getStaticProps (){
    const videos = await videosReq()
    const listEvents = await listEvent()

    return {
        props:{
            videos,
            listEvents,
        },
        revalidate: 1800
    }
}
