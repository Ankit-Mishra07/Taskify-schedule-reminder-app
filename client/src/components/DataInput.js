import React, { useState } from 'react'
import styles from '../styles/datainput.module.css'
import Error from './Error'
const DataInput = () => {
  const [form, setForm] = useState({})
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

  }

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
        />
        </div>

        <div>
        <span><label htmlFor="scheduledDateTime">Select Time</label>
        <sup>*</sup></span>
        <input type="time" name='scheduledDateTime' required
        onChange={(e) => handleInput(e)}
        />
        </div>

        <div>
        <span><label htmlFor='link'>Enter Meet URL</label></span>
        <input type="url"  name="link" placeholder='Optional(For Tasks)'
        onChange={(e) => handleInput(e)}
        />
        </div>

        <div>
          <button type='submit' onClick={(e) => handleData(e)}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default DataInput