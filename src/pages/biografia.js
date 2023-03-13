import Navbar from "../components/Navbar";
import Rafa from "../media/konai_novo.jpg"
import Biografia from '../styles/biografia.module.css'
import Footer from "../components/Footer"


export default function biografia(){
   return(
        <>
        <Navbar title='KONAI BIOGRAFIA'></Navbar>
        <div className={Biografia.biografiaHead}> 
            <div className={Biografia.Rafaimg}>
                <img src={Rafa.src} ></img>
            </div>
            <div className={Biografia.rafaBack}>
                <div className={Biografia.kamaitachiHead}>
                    KONAI
                </div>
                <div className={Biografia.biografiaTitle}>
                    BIOGRAFIA
                </div>
            </div>
        </div>
        <div className={Biografia.txt}>
        Konai é o nome artístico de João Vitor Portela dos Santos, um cantor, compositor e produtor brasileiro que iniciou sua carreira em 2017. Ele é considerado um dos pioneiros do gênero sad songs no Brasil, que mistura rap, R&B e pop com letras melancólicas e introspectivas. Ele produz suas próprias músicas e tem uma identidade única e misteriosa. Ele nasceu em Taboão da Serra, São Paulo, mas cresceu em Campo Grande, Mato Grosso do Sul. Ele atualmente pertence a Sony Music e já tem mais de 250 milhões de plays nas plataformas digitais. Algumas curiosidades sobre Konai são:<br/>
        <ul className={Biografia.txtlist}>
            <li>
            Ele começou a fazer música aos 15 anos, quando ganhou um violão de sua mãe.
            </li>
            <li>
            Ele se inspira em artistas como XXXTentacion, Lil Peep, The Weeknd e Lana Del Rey.
            </li>
            <li>
            Ele assinou com a Sony Music em 2019 e lançou seu primeiro EP chamado “Petricor” no mesmo ano.
            </li>
            <li>
            Ele tem uma tatuagem de uma rosa vermelha no pescoço e outra de um olho na mão direita
            </li>
        </ul>

        </div>
        <footer>
                <Footer></Footer>
        </footer> 

       </>
   )
}