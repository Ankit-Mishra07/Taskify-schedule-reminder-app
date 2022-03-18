import React, { useEffect } from 'react'
import styles from '../styles/dataoutput.module.css'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'

const TodaySch = ({isLogin, data, setData, todayS, prev, setPrev}) => {



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
            todayS.map((elem) => (
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

export default TodaySch