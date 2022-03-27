import React, { useState } from 'react'
import styles from '../styles/addLink.module.css'
import Error from './Error'
const AddLink = () => {
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")


  return (
    <div className={styles.addLinkBox}>

        <button className={styles.cut}>X</button>
    {
        error && 
        <Error text={errorMsg}/>
      }
        <form method='POST' className={styles.addLinkForm}>
            <input type="text" placeholder='Enter Title here' />
            <input type="url" placeholder='Enter URL here'/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddLink