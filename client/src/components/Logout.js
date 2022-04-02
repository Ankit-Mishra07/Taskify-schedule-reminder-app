import React from 'react'

import styles from '../styles/logout.module.css'

const Logout = ({showLogout, setShowLogout}) => {
  return (
    <div className={styles.LogoutBox}>
        <button className={styles.cut}
        onClick={() => setShowLogout(false)}
        >X</button>
        <h1>Do you want to logout?</h1> 
        <div className={styles.logbtnbox}>
            <button className={styles.no}
            onClick={() => setShowLogout(false)}
            >No</button>
            <button className={styles.yes}
            onClick={() => {setShowLogout(false)
            
            localStorage.removeItem('taskifyUser')
            document.location.reload(true);
            }}
            >Yes</button>
        </div>
    </div>
  )
}

export default Logout