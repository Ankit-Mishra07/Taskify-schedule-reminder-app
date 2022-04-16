import React, { useEffect, useState } from 'react'
import AddLink from '../components/AddLink'
import DataInput from '../components/DataInput'
import DataOutput from '../components/DataOutput'
import Login from '../components/Login'
import Logout from '../components/Logout'
import Navbar from '../components/Navbar'
import SavedLinks from '../components/SavedLinks'
import Signup from '../components/Signup'
import TodaySch from '../components/TodaySch'
import styles from '../styles/home.module.css'
import { getLocal } from '../utils/utils'
const Home = () => {

  const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
  
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [prev, setPrev] = useState(false)
  const [user, setUser] = useState([])
  const [data, setData] = useState([])  
  const [currentDate, setCurrentDate] = useState("")

  const [showAddLink, setShowAddLink] = useState(false)
  const [showSavedLinks, setShowSavedLinks] = useState(false)

  const [todayS, setTodayS] = useState([])

  const [showLogout, setShowLogout] = useState(false)


  const [myCurrentTime, setMyCurrentTime] = useState("Time")
  const getCurrentTime = () => {
      const current_time = new Date();
      let time = current_time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
      });
      time = time.split(" ").join("")    
      setMyCurrentTime(time)
  }

  setInterval(getCurrentTime, 1000)

  
  useEffect(() => {
    let getLog = getLocal('taskifyUser')
    if(getLog === null || getLog.length === 0 || !getLog) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
      setUser(getLog[getLog.length-1])
    }
    
  },[isLogin])
  
  
  const getData = async () => {
    let res = await fetch(`https://thawing-dawn-23134.herokuapp.com/data?user=${user._id}`)
    let dat = await res.json()
    console.log("data inside getData" ,dat)
    setData(dat)
    
    let cur = dat.filter((el) => {
      return currentDate === el.creationDate
    })
    console.log(currentDate)
    setTodayS(cur)
    return dat
  }


  const handleDelete = (id) => {
    fetch(`https://thawing-dawn-23134.herokuapp.com/data/${id}`, {
      method : 'DELETE'
    })
    .then((res) => res.json())
    .then((res) => {
    console.log(res)
    })
    .catch((e) => {
      console.log(e)
    })
  }

  
  useEffect(() => {
    let timeElapsed = Date.now();
    let today = new Date(timeElapsed);
    today = today.toLocaleDateString();
  
    today = today.split("/")
    today = today[2] + "-" + ( (today[0]<10) ? ("0"+today[0]) : today[0] ) + "-" + ( (today[1]<10) ? ("0"+today[1]) : today[1] )
      setCurrentDate(today)
  }, [currentDate])




  
  useEffect(() => {

getData()

  },[isLogin])

  





  return (
    <>
    <Navbar setShowSignup={setShowSignup} showSignup={showSignup} setShowLogin={setShowLogin} showLogin={showLogin}
     isLogin={isLogin}
     user={user}

     setShowLogout={setShowLogout}
     showLogout={showLogout}
    />

    <div className={styles.main__container}>
      <DataInput 
       isLogin={isLogin}
       data={data}
       setData={setData}
       getData={getData}
       showAddLink={showAddLink}
       setShowAddLink={setShowAddLink}
       setShowSavedLinks={setShowSavedLinks}
       showSavedLinks={showSavedLinks}

      />
      <TodaySch 
       isLogin={isLogin}
       data={data}
       setData={setData}
       todayS={todayS}
       prev={prev}
       setPrev={setPrev}
       myCurrentTime={myCurrentTime}
       audio={audio}
       currentDate={currentDate}
       getData={getData}
       handleDelete={handleDelete}
       setTodayS={setTodayS}
      />
    </div>
    {
      prev &&

      <DataOutput 
      prev={prev}
      setPrev={setPrev}
       isLogin={isLogin}
       data={data}
       setData={setData}
       handleDelete={handleDelete}
       
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
      getData={getData}
      />
    }


    {
      showAddLink && isLogin &&
      <AddLink 
      setShowAddLink={setShowAddLink}
      isLogin={isLogin}
      />
    }

    {
      showSavedLinks && isLogin && 
      <SavedLinks 
      setShowSavedLinks={setShowSavedLinks}
      />
    }


    {
      showLogout && 
      <Logout 
      showLogout={showLogout}
      setShowLogout={setShowLogout}
      />
    }
    </>
  )
}

export default Home