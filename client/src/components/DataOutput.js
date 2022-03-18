import React, { useEffect } from 'react'
import styles from '../styles/dataoutput.module.css'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'
const DataOutput = ({isLogin, data, setData}) => {



  return (
    <div className={styles.dataOut_container}>
      <nav className={styles.dataOut_nav}>
        <input type="date" />
        <button>Filter</button>
      </nav>

      {
        isLogin && 
        <div>
          {
            data.map((elem) => (
              <div className={styles.card}>
                
                <div>{elem.title}</div>
                <div><a href={elem.link} target="_blank">Join Meet@{elem.scheduledDateTime}</a></div>
                <div> <span><BsFillAlarmFill/></span> { " " +elem.scheduledDateTime}</div>
                <div><span><BsCalendar2Fill/></span>{" " +elem.creationDate.split("-").reverse().join('-')}</div>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default DataOutput