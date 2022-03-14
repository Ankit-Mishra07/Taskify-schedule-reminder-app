import React, { useState } from 'react'
import styles from '../styles/navbar.module.css'
import {Link} from "react-router-dom"
const Navbar = ({setShowSignup, showSignup}) => {

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
            { true &&
            <div>
            
            <button className={styles.loginbtn} >LOGIN</button>
            <button className={styles.signupbtn} onClick={() =>
            setShowSignup(!showSignup)
            }>SIGNUP</button>
            </div>
            }

            {
                false && 
                <div className={styles.myName_time}>
                    <button className={styles.loginbtn}>AnkitMisra</button>
                    <button className={styles.signupbtn}>{myCurrentTime}</button>
                </div>
            }
            
        </div>
    </nav>
  )
}

export default Navbar