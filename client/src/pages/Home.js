import React, { useEffect, useState } from 'react'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import TodaySch from '../components/TodaySch'
import styles from '../styles/home.module.css'
import { getLocal } from '../utils/utils'
const Home = () => {

  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [prev, setPrev] = useState(false)
  const [user, setUser] = useState([])
  const [data, setData] = useState([])  

  const [todayS, setTodayS] = useState([])



  let timeElapsed = Date.now();
  let today = new Date(timeElapsed);
  today = today.toLocaleDateString();

  today = today.split("/")
  today = today[2] + "-" + ( (today[0]<10) ? ("0"+today[0]) : today[0] ) + "-" + ( (today[1]<10) ? ("0"+today[1]) : today[1] )


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
    setData(dat)

    let cur = dat.filter((el) => {
      return today === el.creationDate
    })
    setTodayS(cur)

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
       data={data}
       setData={setData}
      />
      <TodaySch 
       isLogin={isLogin}
       data={data}
       setData={setData}
       todayS={todayS}
       prev={prev}
       setPrev={setPrev}
      />
    </div>
    {
      prev &&

      <DataOutput 
       isLogin={isLogin}
       data={data}
       setData={setData}
      />
    } 

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