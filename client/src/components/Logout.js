import React from 'react'

import styles from '../styles/logout.module.css'

const Logout = () => {
  return (
    <div>
        <h1>Do you want to logout?</h1>
        <div>
            <button className={styles.no}>No</button>
            <button className={styles.yes}>Yes</button>
        </div>
    </div>
  )
}

export default Logout