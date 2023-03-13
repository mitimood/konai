import React, {useState} from 'react'
import carouselCss from "./carousel.module.css"
import {BsFillArrowLeftCircleFill} from "react-icons/bs"
import {BsFillArrowRightCircleFill} from "react-icons/bs"


function Carousel(props) {
    const events = props.listEvents

    const [curImageMid, setCurImageMid] = useState(0)
    let eventDate = new Date(events[curImageMid].dateSnowflake)

    return (
        <div className={carouselCss.main}>
            <div className={carouselCss.innerLeft} onClick={()=>setCurImageMid(dcsPosition(events, curImageMid))} style={{backgroundImage: `url(${events[dcsPosition(events, curImageMid)].imageUrl})`}}><BsFillArrowLeftCircleFill style={{color:'black', fontSize:'300%', opacity:'90%'}}/></div>
            <div className={carouselCss.innerMid} style={{
                backgroundImage: `url(${events[curImageMid].imageUrl})`,
                alignItems: 'flex-end'

                }}>
                <div className={carouselCss.date}>{`${eventDate.getUTCDate()}/${eventDate.getUTCMonth()+1}`}</div>
                </div>
            <div className={carouselCss.innerRight} onClick={()=>{setCurImageMid(addPosition(events, curImageMid))}} style={{backgroundImage: `url(${events[addPosition(events, curImageMid)].imageUrl})`}}><BsFillArrowRightCircleFill style={{color:'black', fontSize:'300%', opacity:'90%'}}/></div >
        </div>
    )
}

export default Carousel

function addPosition(array, curPosition){

    if( curPosition + 2 > array.length ){
        return 0
    }else{
        return curPosition + 1
    }
}

function dcsPosition(array, curPosition){
    if( curPosition - 1 < 0 ){
        return array.length - 1
    }else{
        return curPosition - 1
    }
}
