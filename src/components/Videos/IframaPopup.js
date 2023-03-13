import React from "react"
import videoCss from "./video.module.css"

function IframaPopup(props){

    return(props.trigger?(

        <iframe src={`https://www.youtube.com/embed/${props.videos[props.EmbId].video_id}?autoplay=1&showinfo=0`}
        frameborder='0'
        width='96%'
        height='92%'
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
        allow='autoplay; encrypted-media'
        title={props.videos[props.EmbId].title}
        className= {videoCss.Frame}
    >      
    </iframe>
        
        ) : "")

}

export default IframaPopup