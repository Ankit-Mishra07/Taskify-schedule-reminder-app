import React, { useEffect, useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import styles from '../styles/savedLinks.module.css'
import { getLocal } from '../utils/utils'
const SavedLinks = ({setShowSavedLinks}) => {

  const [savedUrlData, setSavedUrlData] = useState([])
  const [title, setTitle] = useState("")
 
  let getLog = getLocal('taskifyUser')


  const getSavedUrlData = async () => {
    let res = await fetch(`https://thawing-dawn-23134.herokuapp.com/url?user=${getLog[getLog.length-1]._id}`)
    let dat = await res.json()
    setSavedUrlData(dat)
  }

  useEffect(() => {
    getSavedUrlData()
  },[])

  const getSearchedData = async (title) => {
    let res = await fetch(`https://thawing-dawn-23134.herokuapp.com/url/search/${title}`)
    let dat = await res.json()
    setSavedUrlData(dat)
  }

  useEffect(() => {
    if(title !== "") {
    let timeout = setTimeout(() => {
      getSearchedData(title)
    }, 1000)
    setTimeout(() => {
      clearTimeout(timeout)
    }, 1100);
  }else {
    getSavedUrlData()
  }
  },[title])

  const handleDeleteUrl = (id) => {
    fetch(`https://thawing-dawn-23134.herokuapp.com/url/${id}`, {
      method : 'DELETE'
    }).then(res => res.json())
    .then(res => {
      getSavedUrlData()
    })
    .catch((e) => {
      console.log(e)
    })
  }

  return (
    <div className={styles.savedLinks_container}>
        <button className={styles.cut} onClick={() => setShowSavedLinks(false)}>X</button>
        <nav className={styles.saved_nav}>
            <input type="text" placeholder='Search URL Title' onChange={(e) => setTitle(e.target.value)}/>
        </nav>
        {
          savedUrlData.map((el) => (

        <div className={styles.saved_cards} key={el._id}>
            <a href={el.url} target="_blank">{el.title}</a>
            <button onClick={() => handleDeleteUrl(el._id)}><AiFillDelete/></button>
        </div>
          ))

        }
    </div>
  )
}

export default SavedLinks