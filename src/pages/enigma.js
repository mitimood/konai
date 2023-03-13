import React, { useState, useEffect } from 'react'
import enigmaCss from '../styles/enigma.module.css'

export default function enigma() {
    const [audioPlaying, setAudioPlaying] = useState(0);
    const [musicArray, setMusicArray] = useState([]);
    const [handDone, setHandDone] = useState(false);

    useEffect(()=>{
        if(audioPlaying === 0) return
        if(handDone) return
        let play;
        if( audioPlaying === 1 ) play = document.getElementById("sound1")
        if( audioPlaying === 2 ) play = document.getElementById("sound2")
        if( audioPlaying === 3 ) play = document.getElementById("sound3")
        if( audioPlaying === 4 ) play = document.getElementById("sound4")

        if(play) play.play()
        musicArray.push(audioPlaying)
        console.log(musicArray)
        
        if(musicArray[0] === 1){
            if(musicArray[1] === 2){
 
                if(musicArray[2] === 3){

                    if(musicArray[3] === 4){
                        setHandDone(true)
                        play = document.getElementById("certo")
                        play.play()   
                        setTimeout(()=>{
                            play = document.getElementById("final")
                            play.play()   
    
                        },4000)

                    }else if(musicArray[3]){
                        setMusicArray([])
                    }
                }else if(musicArray[2]){
                    setMusicArray([])
                }
            }else if(musicArray[1]){
                setMusicArray([])
            }
        }else if(musicArray[0]){
            setMusicArray([])
        }

        setAudioPlaying(0)
    },[audioPlaying])

    const [name, setName] = useState("");
    const [level, setLevel] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(verificaNome(name)) setLevel(level + 1)
        else alert("errou")
        
      }

    let bicho = ['b','i','c','h','o']
    let papao = ['p','a','p','ã','o']
    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
    bicho = shuffle(bicho)

    papao = shuffle(papao)
    
    switch (level) {
        case 0:
            return (
                <>
                    <h1>{bicho[0]}{bicho[1]}{bicho[2]}{bicho[3]}{bicho[4]} {papao[0]}{papao[1]}{papao[2]}{papao[3]}{papao[4]}</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                        <input
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        </label>
                        <input type="submit" /> 
                    </form>
                </>
              
            )    
        case 1:
            return(
                <>
                    <div>Toque com meus dedos</div>
                    <div className={enigmaCss.background}  style={{  backgroundImage: `url(/imagens/bichopapaomao.png)`}}>
                        <div className={enigmaCss.bot1} onClick={()=>setAudioPlaying(1)}>1</div>
                        <div className={enigmaCss.bot2} onClick={()=>setAudioPlaying(2)}>2</div>
                        <div className={enigmaCss.bot3} onClick={()=>setAudioPlaying(3)}>3</div>
                        <div className={enigmaCss.bot4} onClick={()=>setAudioPlaying(4)}>4</div>
                    </div>

                    <audio src='/bichopapao/Sound1.mp3' id='sound1'/>
                    <audio src='/bichopapao/Sound2.mp3' id='sound2'/>
                    <audio src='/bichopapao/Sound3.mp3' id='sound3'/>
                    <audio src='/bichopapao/Sound4.mp3' id='sound4'/>
                    <audio src='/bichopapao/final.mp3' id='final'/>
                    <audio src='/bichopapao/correctAnswer.mp3' id='certo'/>

                </>


            )
        case 2:
            return(
                <div className={enigmaCss.desafio3Back}>
                    <div className={enigmaCss.desafio3}>
                        <div className={enigmaCss.bichoPapao}>asdfasdfasdfasdf</div>
                    </div>
                </div>
            )
        case 3:
            return(
                <div>LALALALLALA</div>
            )
    }
    
}


function verificaNome(entrada){
    entrada = entrada.toLowerCase()
    if(/bicho pap(a|ã)o/.test(entrada) ) return true
    else false
}

