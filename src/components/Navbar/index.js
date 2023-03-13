import Link from "next/link"
import logoMobile from '../../media/logomobile.png'
import logo from '../../media/logovermelha2.png'
import discordLogo from '../../media/images/icon_clyde_white_RGB.svg'

import Header from '../../styles/header.module.css'
import Hamburger from 'hamburger-react'
import Login from '../login';
import Head from "next/head"

import { useState } from "react"
import { useSession, signIn, signOut } from "next-auth/client"

export default function Navbar(props){
  const [showLinks, setShowLinks] = useState(false)
  const [session, loading] = useSession()
  return (
    
  <header className={Header.header}>
      <Head style={{width:"0px"}}>
        <meta property="og:title" content="KONAI"/>
        <meta property="og:description" content="site do konaizinhoo."/>
        <meta property="og:image" content="https://trapbrfrases.com/wp-content/uploads/2022/10/Konai.jpg"/>
        <meta property="og:url" content="http://konai.com.br"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:site_name" content="konai"/>
        <meta name="twitter:image:alt" content="logo"></meta>
        <meta name="keywords" content="konai, videos, fan"/>  
        <meta name="google-site-verification" content="-7R5FfWYH_T3sNt7MkzP2yfp6TF9aqUS8PsntbWeVCE" />
        <title>{props.title}</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
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