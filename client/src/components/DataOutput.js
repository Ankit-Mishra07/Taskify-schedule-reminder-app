import React, { useEffect } from 'react'
import styles from '../styles/dataoutput.module.css'
const DataOutput = ({isLogin}) => {



  return (
    <div className={styles.dataOut_container}>
      <nav className={styles.dataOut_nav}>
        <input type="date" />
        <button>Filter</button>
      </nav>

      {
        isLogin && 
        <div>
          
        </div>
      }
    </div>
  )
}

export default DataOutput