import React, { useState } from 'react'
import Error from './Error'
import styles from '../styles/signup.module.css'
import swal from 'sweetalert'
import { setLocal } from '../utils/utils'
const Login = ({setShowSignup, setShowLogin, isLogin, setIsLogin, getData}) => {

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [num, setNum] = useState({
    mobile : ""
  })

  const handleLogin = (e)=> {
    e.preventDefault()

    if(!(num.mobile) || (num.mobile.length !== 10)) {
      setErrorMsg('Please fill valid mobile number')
      setError(true)
      return
    }

    fetch('https://thawing-dawn-23134.herokuapp.com/user/login', {
      method: 'POST',
      body : JSON.stringify(num),
      headers : {
        'Content-Type' : 'application/json'
      }
    }).then((res) => res.json()) 
    .then(res => {
      if(res.msg) {
        setErrorMsg(res.msg)
        setError(true)
      }else {

        setError(false)
        setErrorMsg('')
        setShowLogin(false)

        
        swal("Thank You", "You have logged in successfully!", "success");
        setLocal("taskifyUser", res)
        setIsLogin(true)
        getData()

      }
    })

  }

  return (
    <div className={styles.signup_box}>
        <button className={styles.cut}
        onClick={() => setShowLogin(false)}
        >X</button>
    {error && 
      <Error text={errorMsg} />
    }
    <form method="POST" className={styles.signup_form}>
    <input type="number" name="mobile" placeholder='Enter mobile number' required autoComplete="off" onChange={(e) => setNum({mobile : e.target.value})}/>
    <div className={styles.signup_btn_box}>
    <button onClick={() => {
      setShowSignup(true)
      setShowLogin(false)
    }}>create new account</button>
    <button type='submit' onClick={(e) => handleLogin(e)}>Login</button>
    </div>
    </form>
</div>
  )
}

export default Login