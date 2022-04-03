import React, { useEffect, useState } from 'react'
import styles from '../styles/todaysch.module.css'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'
import Alarm from './Alarm'
import {IoReloadOutline} from 'react-icons/io5'
import { AiFillDelete } from 'react-icons/ai'

const TodaySch = ({isLogin, data, setData, todayS, prev, setPrev, myCurrentTime, audio, currentDate, getData, handleDelete, setTodayS}) => {


  const [forJoin, setForJoin] = useState(false)

  const handleTempFil = (id) => {
    let dat = todayS.filter((e) => {
      return e._id !== id
    })

    setTodayS(dat)
  }

  return (
    <div className={styles.dataOut_container}>
      <nav className={styles.dataOut_nav}>

        <span className={styles.reloadbtn}>
        <button onClick={() => getData()}><IoReloadOutline /></button>
        <h3>Today's Schedule</h3>
        </span>
        <button onClick={() => setPrev(!prev)}>See Previous Schedules</button>
      </nav>

      {
        isLogin && 
        <div>
          {
            todayS.map((elem) => (
              <>
              {
                elem.scheduledDateTime===myCurrentTime && 
                <Alarm curTime={myCurrentTime}
                scheduleTime={elem.scheduledDateTime}
                audio={audio}
                currentDate={currentDate}
                creationDate={elem.creationDate}
                title={elem.title}
                link={elem.link}
                
                />
              }
              <div className={styles.card} key={elem._id} >


                <div>{elem.title}</div>
                <div>{elem.link ? 
                <a href={elem.link} target="_blank" 
                onMouseOver={() => setForJoin(true)} 
                onMouseLeave={() => setForJoin(false)}> 
                {`Join Meet@${elem.scheduledDateTime}`}</a> : ""
                }
                </div>
                
                <div> <span style={{color : elem.scheduledDateTime===myCurrentTime ? "orangered" : "#1A374D"}}><BsFillAlarmFill/> </span> {" "} <span>{elem.scheduledDateTime}</span></div>
                <div><span><BsCalendar2Fill/></span>{" " +elem.creationDate.split("-").reverse().join('-')}</div>
                <button className={styles.del} onClick={
                  () => {
                    handleDelete(elem._id)
                    handleTempFil(elem._id)
                  }
                }><AiFillDelete/></button>
              </div>

              </>
            ))
          }
        </div>
      }
    </div>
  )
}

export default TodaySch