import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'
import {Link} from "react-router-dom"
const Navbar = () => {

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
            { false &&
            <div>
            
            <Link className={styles.link} to="/"><button className={styles.loginbtn}>LOGIN</button></Link>
            <Link className={styles.link} to="/"><button className={styles.signupbtn}>SIGNUP</button></Link>
            </div>
            }

            {
                true && 
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