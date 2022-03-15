import React, { useState } from 'react'
import Error from './Error'
import styles from '../styles/signup.module.css'
const Login = ({setShowSignup, setShowLogin}) => {

  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [num, setNum] = useState("")

  const handleLogin = (e)=> {
    e.preventDefault()

    if(!num || num.length!==10) {
      setErrorMsg('Please fill valid mobile number')
      setError(true)
      return
    }

    fetch('http://localhost:5000')

  }

  return (
    <div className={styles.signup_box}>
    {error && 
      <Error text={errorMsg} />
    }
    <form method="POST" className={styles.signup_form}>
    <input type="number" name="mobile" placeholder='Enter mobile number' required autoComplete="off" onChange={(e) => setNum(e.target.value)}/>
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