import React, { useEffect, useState } from 'react'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'
import styles from '../styles/alarm.module.css'
const Alarm = ({curTime, scheduleTime,  audio, currentDate, creationDate, title, link}) => {
  console.log(curTime, scheduleTime)

    const [alrm, setAlrm] =  useState(true)
  
    if(curTime===scheduleTime) {
      audio.loop = true;

      audio.play()

      setTimeout(() => {
        audio.pause()
      }, 10000)
    }else{
    }

    const handlePause = () => {
      audio.loop = false;
      audio.pause();
    }
  
  return (
  <>
  {alrm &&
    <div className={styles.alarm_box}>
        <h1>{title}</h1>
       {link ? <a href={link ? link : ""} target="_blank" rel="noopener noreferrer">{link ? "Click Here to Join" : ""}</a> : ""}
        <div className={styles.alrm_times}>
          <span><BsFillAlarmFill/> {scheduleTime}</span>
          <span><BsCalendar2Fill/>{creationDate.split("-").reverse().join('-')}</span>
        </div>
        <button className={styles.alarm_btn} onClick={handlePause}>Stop Alarm</button>
    </div>
}
   </>
  )
}

export default Alarm