import React, { useEffect, useState } from 'react'
import styles from '../styles/datainput.module.css'
import { getLocal } from '../utils/utils'
import Error from './Error'
const DataInput = ({isLogin, data, setData, getData, showAddLink,  setShowAddLink, setShowSavedLinks, showSavedLinks}) => {
  const [form, setForm] = useState({
    title : "",
    scheduledDateTime : "",
    link : ""

  })
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const handleInput = (e) => {
    let {name, value} = e.target

    setForm({
      ...form,
      [name] : value
    })
  }





  const handleData = (e) => {
    e.preventDefault()

    let {title, scheduledDateTime, link} = form 

    if(!title || !scheduledDateTime) {
      setError(true)
      setErrorMsg("Please fill valid title and schedule")
      return
    }

    let time = form['scheduledDateTime'].split(':')

    if(time[1].length <= 2) {
      time = form['scheduledDateTime'].split(':').map(Number)

    if(time[0] >= 12) {
      form['scheduledDateTime'] = (time[0]%12 < 10 ? "0" : '')+ (time[0]%12 || 12) + ":" + (time[1] < 10 ? ('0' + time[1]) : time[1]) + "PM"
    }else if(time[0] < 12) {
      form['scheduledDateTime'] =  (time[0] < 10 ? ('0' + time[0]) : time[0]) + ":" + (time[1] < 10 ? ('0' + time[1]) : time[1]) + "AM"
    } 

  }else {
    form['scheduledDateTime'] =  form['scheduledDateTime']
  }



    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    today = today.toLocaleDateString();

    today = today.split("/")
    today = today[2] + "-" + ( (today[0]<10) ? ("0"+today[0]) : today[0] ) + "-" + ( (today[1]<10) ? ("0"+today[1]) : today[1] )

    let getLog = getLocal('taskifyUser')
    
    let obj = {
      ...form,
      creationDate : today,
      userId : getLog[getLog.length-1]._id
    }

    fetch('https://thawing-dawn-23134.herokuapp.com/data', {
      method : 'POST',
      body : JSON.stringify(obj),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      if(res.status === 'Failed') {
        setError(true)
        setErrorMsg('Something went wrong')
        return
      }
      console.log(res)
      getData()
      setForm({
        title : "",
        scheduledDateTime : "",
        link : ""
      })
    })
    .catch((e) => {
      setError(true)
      setErrorMsg('Something went wrong')
    })

    
   
  }

useEffect(() => {
  if(isLogin === false) {
    setError(true)
    setErrorMsg('Please Login!')
  }else {
    setError(false)
  }
},[isLogin])





  return (
    <div className={styles.mainInputBox}>
      <h3>Enter Your Today's Schedule data Here</h3>
      {
        error && 
        <Error text={errorMsg}/>
      }
      <form className={styles.FormInput}>
        <div>
        <span><label htmlFor="title">Enter Title</label>
        <sup>*</sup></span>
        <input type="text" name='title' placeholder='Enter title here' required
        onChange={(e) => handleInput(e)}
        minLength="1" maxLength="60"
        className='input-title'
        value={form.title}
        />
        </div>

        <div>
        <span><label htmlFor="scheduledDateTime">Select Time</label>
        <sup>*</sup></span>
        <input type="time" name='scheduledDateTime' required
        onChange={(e) => handleInput(e)}
        className='input-time'
        value={form.scheduledDateTime}
        />
        </div>

        <div>
        <span><label htmlFor='link'>Enter Meet URL</label></span>
        <input type="url"  name="link" placeholder='Optional(For Tasks)'
        onChange={(e) => handleInput(e)}
        className='input-link'
        value={form.link}
        />
        </div>

        <div>
          <button type='submit' onClick={(e) => handleData(e)} disabled={!isLogin}>Save</button>
        </div>
      </form>
      <div className={styles.imp_linkbtn_box}>
      <h1 className={styles.imp_link}>Important Links</h1>
      <div className={styles.imp_btns}>
        <button onClick={() => setShowSavedLinks(!showSavedLinks)}>Saved Links</button>
        <button onClick={() => setShowAddLink(!showAddLink)}>Add</button>
      </div>
      </div>
    </div>
  )
}

export default DataInput