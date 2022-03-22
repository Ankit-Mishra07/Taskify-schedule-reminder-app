import React, { useEffect, useState } from 'react'
import styles from '../styles/alarm.module.css'
const Alarm = ({curTime, scheduleTime,  audio, currentDate, creationDate, title, link}) => {
  console.log(curTime, scheduleTime)

    const [alrm, setAlrm] =  useState(false)
  
    if(curTime==scheduleTime) {
      audio.loop = true;

      audio.play()

      setTimeout(() => {
        audio.pause()
      }, 10000)
    }else{
    }

    
  
  return (
    <div className={styles.alarm_box}>
        <h1>{title}</h1>
        <a href={link ? link : ""} target="_blank" rel="noopener noreferrer">{link ? "Click Here to Join" : ""}</a>
        <div>
          <span>{scheduleTime}</span>
          <span>{creationDate}</span>
        </div>
        <button>Close Alarm</button>
    </div>
  )
}

export default Alarm