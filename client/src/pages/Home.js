import React, { useState } from 'react'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import styles from '../styles/home.module.css'
const Home = () => {

  const [showSignup, setShowSignup] = useState(false)
 
  return (
    <>
    <Navbar setShowSignup={setShowSignup} showSignup={showSignup}/>

    <div className={styles.main__container}>
      <DataInput />
      <DataOutput />
    </div>

    {
      showSignup && 
      <Signup />
    }
    </>
  )
}

export default Home