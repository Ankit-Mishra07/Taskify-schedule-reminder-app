import React, { useState } from 'react'
import styles from '../styles/addLink.module.css'
import Error from './Error'
const AddLink = ({setShowAddLink}) => {
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")


  return (
    <div className={styles.addLinkBox}>

        <button className={styles.cut} onClick={() => setShowAddLink(false)}>X</button>
    {
        error && 
        <Error text={errorMsg}/>
      }
        <form method='POST' className={styles.addLinkForm}>
            <h4>Add Important URL</h4>
            <input type="text" placeholder='Enter Title here' />
            <input type="url" placeholder='Enter URL here'/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddLink