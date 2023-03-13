import videoCss from "./video.module.css"
import IframaPopup from "./IframaPopup"
import { useState } from "react"
import {FaPlay} from 'react-icons/fa'


function Videos(props){
    let videos = props.videos
    while(videos.length>7){
        videos.pop()
    }
    const [embVisb, setEmbVisb] = useState(false)
    const [EmbId, setEmbId] = useState(0)
    return(
        
        <div>
            <div style={{ justifyContent:"center",alignContent:"center", display: embVisb ? "flex" : "none"}} className={videoCss.FrameBack}>
                <IframaPopup trigger={embVisb} EmbId={EmbId} videos={videos}></IframaPopup>
            </div>
            <div className = {videoCss.centerBack}>
                <h2 className = {videoCss.ultimoLancamento}>
                ULTIMO LANÇAMENTO
                </h2>

                <div style= {{backgroundImage: `url(${videos[0].thumb})`}} className={videoCss.center} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(0)
                    window.scrollTo({top: 0, behavior: 'smooth'});

                }}><FaPlay/></div>
            </div>
            <div className = {videoCss.backitems}>
                <div className = {videoCss.part1}>

                    <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[1].title}</div>
                        <div style= {{backgroundImage: `url(${videos[1].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(1)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>
                    <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[2].title}</div>
                        <div style= {{backgroundImage: `url(${videos[2].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(2)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>                    
                    <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[3].title}</div>
                        <div style= {{backgroundImage: `url(${videos[3].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(3)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>                </div>
                <div className = {videoCss.part2}>
                <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[4].title}</div>
                        <div style= {{backgroundImage: `url(${videos[4].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(4)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>
                    <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[5].title}</div>
                        <div style= {{backgroundImage: `url(${videos[5].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(5)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>
                    <div className= {videoCss.video}>
                        <div className = {videoCss.title}>{videos[6].title}</div>
                        <div style= {{backgroundImage: `url(${videos[6].thumb})`}} className={videoCss.items} onClick={()=>{
                    setEmbVisb(true)
                    setEmbId(6)
                    window.scrollTo({top: 0, behavior: 'smooth'});
                }}><FaPlay/></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Videos