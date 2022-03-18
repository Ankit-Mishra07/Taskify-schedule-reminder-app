import React, { useEffect, useState } from 'react'
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
  const [user, setUser] = useState([])
  const [data, setData] = useState([])  
  
  useEffect(() => {
    let getLog = getLocal('taskifyUser')
    if(getLog === null || getLog.length === 0) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
      setUser(getLog[getLog.length-1])
    }

  },[isLogin])


  const getData = async () => {
    let res = await fetch(`http://localhost:5000/data?user=${user._id}`)
    let dat = await res.json()
    console.log("data" ,dat)
   }
 
   useEffect(() => {
     getData()
   },[])



  return (
    <>
    <Navbar setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin} showLogin={showLogin}
     isLogin={isLogin}
     user={user}
    />

    <div className={styles.main__container}>
      <DataInput 
       isLogin={isLogin}
       setIsLogin={setIsLogin}
      />
      <DataOutput 
       isLogin={isLogin}
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