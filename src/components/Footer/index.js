import FooterCss from "../../styles/footer.module.css"
import {GrInstagram} from "react-icons/gr"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"


export default function Footer(){
    
    return(
        <div className={FooterCss.back}>
            
            <div className={FooterCss.kamaitachi}>KONAI</div>
            <div className={FooterCss.kamaitachiLink} >
                
                <a target="_blank" href="https://www.youtube.com/channel/UC7fCYSfauoMDbdBZ9B0ex2Q"  style={{margin:"10%", color:'grey'}}><AiFillYoutube/></a>
                <a target="_blank" href="https://twitter.com/Konai" style={{margin:"10%", color:'grey'}}><AiFillTwitterCircle/></a>
                <a target="_blank" href="https://www.instagram.com/konai/" style={{margin:"10%", color:'grey'}}><GrInstagram/></a>

            </div>
            <h4 className={FooterCss.feitoPor}>
            feito por miti mood

            </h4>

            {/* <div className={FooterCss.discord}>Servidor Discord</div>
            <div className={FooterCss.discordLink}>
                <a target="_blank" style={{margin:"10%"}}><AiFillTwitterCircle/></a>
                <a target="_blank" style={{margin:"10%"}}><BsFacebook/></a>
                <a target="_blank" style={{margin:"10%"}}><GrInstagram/></a>

            </div> */}
        </div>
    )

    
}