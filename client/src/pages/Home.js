import React from 'react'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Navbar from '../components/Navbar'
import styles from '../styles/home.module.css'
const Home = () => {
  return (
    <>
    <Navbar />

    <div className={styles.main__container}>
      <DataInput />
      <DataOutput />
    </div>
    </>
  )
}

export default Home