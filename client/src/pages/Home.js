import React, { useState } from 'react'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import styles from '../styles/home.module.css'
const Home = () => {

  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  

  return (
    <>
    <Navbar setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin} showLogin={showLogin}/>

    <div className={styles.main__container}>
      <DataInput />
      <DataOutput />
    </div>

    {
      showSignup && 
      <Signup setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin}/>
    }

    {
      showLogin && 
      <Login setShowSignup={setShowSignup} setShowLogin={setShowLogin}/>
    }
    </>
  )
}

export default Home