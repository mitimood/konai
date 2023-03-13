import Link from "next/link"
import logoMobile from '../../media/logomobile.png'
import logo from '../../media/logovermelha2.png'
import discordLogo from '../../media/images/icon_clyde_white_RGB.svg'

import Header from '../../styles/header.module.css'
import Hamburger from 'hamburger-react'
import Login from '../login';

import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/client"

export default function Navbar(props){
  const [showLinks, setShowLinks] = useState(false)
  const [session, loading] = useSession()
  return (
    
  <header className={Header.header}>
    <a href= "/"  className={Header.logo}>
      <h1 className={Header.logo}>
        KONAI
      </h1>
      {/* <img src={logo.src} alt="logo" className={Header.logo}/> */}
    </a>
    <div className={Header.mobileHead}>
        <a href="/" className={Header.logoMobile}>
        <h1 className={Header.logoMobile} >
        KONAI
        </h1>
          {/* <img src={logoMobile.src} className={Header.logoMobile} alt="logo" /> */}
        </a>
        <div className={Header.user} style={{display: session && window.innerWidth < 760 ? "flex" : "none" }}>
        </div>
        <Hamburger toggled={showLinks} toggle={setShowLinks} className={Header.menuBut} color="#A9A9A9"/>
    </div>
    <span>
        <div className = {showLinks ? Header.hidden : ""}>
            <div className = {showLinks ? Header.linksHid : Header.links }>
                <a href= "/biografia"  className={Header.Navbar}>Biografia</a>
            </div>
        </div>
    </span>
  </header>)
}