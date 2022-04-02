import React, { useEffect, useState } from 'react'
import styles from '../styles/dataoutput.module.css'
import {BsCalendar2Fill, BsFillAlarmFill} from 'react-icons/bs'
import { AiFillDelete } from 'react-icons/ai'
const DataOutput = ({isLogin, data, setData, prev, setPrev, handleDelete}) => {

  const [filDate, setFilDate] = useState("")

  const [thisData, setThisData] = useState(data)

  const handleFilter = () => {


    if(filDate.split("-").length < 3) {
      alert('Please fill valid date')
      return
    }

    let newdata = data.filter((elem) => {
      return elem.creationDate == filDate
    })

    setThisData(newdata)
  }



  const handleTempFil = (id) => {
    let dat = thisData.filter((e) => {
      return e._id !== id
    })

    setThisData(dat)
  }


  return (
    <div className={styles.dataOut_container}>
      <button className={styles.cut} onClick={() => setPrev(false)}>X</button>
      <nav className={styles.dataOut_nav}>
        <input type="date" value={filDate} onChange={(e) => setFilDate(e.target.value)}/>
        <button onClick={handleFilter}>Filter</button>
        <button onClick={() => { setThisData(data)
        setFilDate('')
        }}>Clear</button>
      </nav>

      {
        isLogin && 
        <div className={styles.cardsCont}>
          {
            thisData.map((elem) => (
              <div className={styles.card} key={elem._id}>
                <div>{elem.title}</div>
                <div><a href={elem.link} target="_blank">Join Meet@{elem.scheduledDateTime}</a></div>
                <div> <span><BsFillAlarmFill/></span> { " " +elem.scheduledDateTime}</div>
                <div><span><BsCalendar2Fill/></span>{" " +elem.creationDate.split("-").reverse().join('-')}</div>
                <button className={styles.del} onClick={
                  () => {
                    handleDelete(elem._id)
                    handleTempFil(elem._id)
                  }
                }><AiFillDelete/></button>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default DataOutput