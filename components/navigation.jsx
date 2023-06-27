import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import '../style/navigation.css'


const Navigation = ({children}) => {
    const [status,setStatus]=useState(false)
    const sidebarHandler=()=>{
        setStatus(status=>!status)
    }
    return (
        <>
            <div className={"navigation"}>
                <div className="side-bar-icon-holder" id="side-bar-icon" onClick={sidebarHandler}><Image src='/Icons/sidebar.png' width={100} height={100} alt='side bar icon'/></div>
                <div className="logo">Logo</div>
                <div className="menu">
                    <div className="link"><Link href="/">Home</Link></div>
                    <div className="link"><Link href="/">Our Services</Link></div>
                    <div className="link"><Link href="/">Sell Product</Link></div>
                    <div className="link"><Link href="/">Leather</Link></div>
                    <div className="link"><Link href="/">Contact Us</Link></div>
                </div>
                <div className="profile"><button className="profile-button">Login/SignUp</button></div>
            </div>
            {children(status)}
        </>
    )
}


export default Navigation;