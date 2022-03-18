import React, { useState } from 'react'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import styles from '../styles/home.module.css'
import { getLocal } from '../utils/utils'
const Home = () => {

  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  
  let getLog = getLocal('taskifyUser')

  if(getLog === null || getLog.length === 0) {
    setIsLogin(false)
  } else {
    setIsLogin(true)
  }

  return (
    <>
    <Navbar setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin} showLogin={showLogin}/>

    <div className={styles.main__container}>
      <DataInput 
       isLogin={isLogin}
       setIsLogin={setIsLogin}
      />
      <DataOutput 
       isLogin={isLogin}
       setIsLogin={setIsLogin}
      />
    </div>

    {
      showSignup && 
      <Signup setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      />
    }

    {
      showLogin && 
      <Login setShowSignup={setShowSignup} setShowLogin={setShowLogin}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      />
    }
    </>
  )
}

export default Home