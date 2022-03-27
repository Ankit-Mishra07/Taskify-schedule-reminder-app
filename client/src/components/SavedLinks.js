import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import styles from '../styles/savedLinks.module.css'
const SavedLinks = ({setShowSavedLinks}) => {
  return (
    <div className={styles.savedLinks_container}>
        <button className={styles.cut} onClick={() => setShowSavedLinks(false)}>X</button>
        <nav className={styles.saved_nav}>
            <input type="text" placeholder='Search URL Title' />
        </nav>
        <div className={styles.saved_cards}>
            <a href='#' target="_blank">Title</a>
            <button><AiFillDelete/></button>
        </div>
    </div>
  )
}

export default SavedLinks