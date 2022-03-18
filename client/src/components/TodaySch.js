import React, { useEffect, useState } from 'react'
import styles from '../styles/todaysch.module.css'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'

const TodaySch = ({isLogin, data, setData, todayS, prev, setPrev}) => {


  const [forJoin, setForJoin] = useState(false)

  return (
    <div className={styles.dataOut_container}>
      <nav className={styles.dataOut_nav}>
        <h3>Today's Schedule</h3>
        <button>See Previous Schedules</button>
      </nav>

      {
        isLogin && 
        <div>
          {
            todayS.map((elem) => (
              <div className={styles.card}>
                
                <div>{elem.title}</div>
                <div>{elem.link ? 
                <a href={elem.link} target="_blank" 
                onMouseOver={() => setForJoin(true)} 
                onMouseLeave={() => setForJoin(false)}> 
                {forJoin? 'Click here to join' : `Join Meet@${elem.scheduledDateTime}`}</a> : ""
                }
                </div>
                
                <div> <span><BsFillAlarmFill/> </span> {" "} <span>{elem.scheduledDateTime}</span></div>
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