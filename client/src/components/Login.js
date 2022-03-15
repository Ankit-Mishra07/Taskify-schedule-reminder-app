import React, { useState } from 'react'
import Error from './Error'
import styles from '../styles/signup.module.css'
const Login = ({setShowSignup, setShowLogin}) => {

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

    fetch('http://localhost:5000/user/login', {
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
      }
    })

  }

  return (
    <div className={styles.signup_box}>
    {error && 
      <Error text={errorMsg} />
    }
    <form method="POST" className={styles.signup_form}>
    <input type="number" name="mobile" placeholder='Enter mobile number' required autoComplete="off" onChange={(e) => setNum({mobile : e.target.value})}/>
    <div className={styles.signup_btn_box}>
    <button onClick={() => {
      setShowSignup(false)
      setShowLogin(true)
    }}>Don't have an account</button>
    <button type='submit' onClick={(e) => handleLogin(e)}>Login</button>
    </div>
    </form>
</div>
  )
}

export default Login