import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import {Link} from "react-router-dom"
const Navbar = ({setShowSignup, showSignup, setShowLogin, showLogin, isLogin,user, showLogout, setShowLogout} ) => {

    const [myCurrentTime, setMyCurrentTime] = useState("Time")
    const getCurrentTime = () => {
        const current_time = new Date();
        let time = current_time.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
        time = time.split(" ").join("")    
        setMyCurrentTime(time)
    }

    setInterval(getCurrentTime, 1000)


  return (
    <nav className={styles.navbar}>
        <div>
            <div className={styles.logo}>TASKIFY</div>
        </div>

        <div className={styles.navigation}>
            { !isLogin &&
            <div>
            
            <button className={styles.loginbtn} 
            onClick={() => {
                setShowLogin(!showLogin)
                setShowSignup(false)
            }}
            >LOGIN</button>
            <button className={styles.signupbtn} onClick={() => {
            setShowSignup(!showSignup)
            setShowLogin(false)
             } }>SIGNUP</button>
            </div>
            }

            {
                isLogin && 
                <div className={styles.myName_time}>
                    <button className={styles.loginbtn}
                    onClick={() => setShowLogout(!showLogout)}
                    >{user.name}</button>
                    <button className={styles.signupbtn}>{myCurrentTime}</button>
                </div>
            }
            
        </div>
    </nav>
  )
}

export default Navbar