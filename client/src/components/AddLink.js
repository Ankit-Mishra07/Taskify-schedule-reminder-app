import React, { useState } from 'react'
import styles from '../styles/addLink.module.css'
import Error from './Error'
import swal from 'sweetalert'
import { getLocal } from '../utils/utils'
const AddLink = ({setShowAddLink, isLogin}) => {
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [titleInput, setTitleInput] = useState('')
    const [urlInput, setUrlInput] = useState('')

    const handleUrlSubmit = (e) => {
      e.preventDefault()

      if(!titleInput || !urlInput) {
        setError(true)
        setErrorMsg('Title and Url both required!')
        return
      }
      if(isLogin==false) {
        setError(true);
        setErrorMsg('Please Login!')
        return
      }

      let getLog = getLocal('taskifyUser')
      const payload = {
        title : titleInput,
        url : urlInput,
        userId : getLog[getLog.length-1]._id
      }

      fetch(`https://thawing-dawn-23134.herokuapp.com/url`, {
        method : 'POST',
        body : JSON.stringify(payload),
        headers : {
          'Content-Type' : 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => {
        setError(false);
        setErrorMsg('');
        swal('URL Saved');
        setTitleInput('')
        setUrlInput('')
      })
      .catch((e) => {
        setError(true)
        setErrorMsg('Something went wrong, try again!')
      })
    }

  return (
    <div className={styles.addLinkBox}>

        <button className={styles.cut} onClick={() => setShowAddLink(false)}>X</button>
    {
        error && 
        <Error text={errorMsg}/>
      }
        <form method='POST' className={styles.addLinkForm} onSubmit={(e) => handleUrlSubmit(e)}>
            <h4>Add Important URL</h4>
            <input type="text" placeholder='Enter Title here' value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>
            <input type="url" placeholder='Enter URL here' value={urlInput} onChange={(e) => setUrlInput(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddLink