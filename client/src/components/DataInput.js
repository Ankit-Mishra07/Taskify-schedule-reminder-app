import React, { useState } from 'react'
import styles from '../styles/datainput.module.css'
const DataInput = () => {
  const [form, setForm] = useState({})

  

  return (
    <div className={styles.mainInputBox}>
      <h3>Enter Your Schedule data Here</h3>
      <form>
        <div>
        <label htmlFor="title">Enter Title</label>
        <sup>*</sup>
        <input type="text" name='title' placeholder='Enter title here' required/>
        </div>

        <div>
        <label htmlFor="scheduledDateTime">Select Time</label>
        <sup>*</sup>
        <input type="time" name='scheduledDateTime' required/>
        </div>

        <div>
        <label htmlFor='link'>Enter Meet URL</label>
        <input type="url"  name="link" placeholder='Optional(For Tasks)'/>
        </div>

        <div>
          <button type='submit'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default DataInput