import React from 'react'
import styles from '../styles/navbar.module.css'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <div className={styles.logo}>TASKIFY</div>
        </div>

        <div className={styles.navigation}>
            { true &&
            <div>
            
            <Link className={styles.link} to="/"><button className={styles.loginbtn}>LOGIN</button></Link>
            <Link className={styles.link} to="/"><button className={styles.signupbtn}>SIGNUP</button></Link>
            </div>
            }

            {
                false && 
                <div>
                    <div>Ankit Misra</div>
                    <div>9:53 AM</div>
                </div>
            }
            
        </div>
    </nav>
  )
}

export default Navbar