import Link from "next/link"

export default function login(props){
    let Nav;
    
    if(props.logged){
      Nav = <a onClick={()=>props.refLogout()}>Logout</a>
    }else{
      Nav = <a onClick={()=>props.refLogin()}>Login</a>

    }
    
  return Nav
}