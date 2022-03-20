import React, { useEffect, useState } from 'react'

const Alarm = ({curTime, scheduleTime,  audio, currentDate, creationDate}) => {
  console.log(curTime, scheduleTime)

    const [alrm, setAlrm] =  useState(false)
  
    if(curTime==scheduleTime) {
      audio.loop = true;

      audio.play()
    }else{
    }

    
  
  return (
    <div>

    </div>
  )
}

export default Alarm