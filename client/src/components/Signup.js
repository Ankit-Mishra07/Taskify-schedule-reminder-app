import React, { useState } from 'react'
import styles from '../styles/signup.module.css'
import Error from './Error'
const Signup = () => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const [signForm, setSignForm] = useState({})

  const handleInput = (e) => {
    let {name, value} = e.target

    setSignForm(
      {
        ...signForm,
        [name] : value
      }
    )
  }

  const handleSignup = (e) => {
    e.preventDefault()

    let {name, mobile, email, password} = signForm
    if(!name || !mobile || !email || !password) {
      setErrorMsg("Please fill all signup data")
      setError(true)
      return
    }

    fetch('http://localhost:5000/user/register', {
      method : 'POST',
      body : JSON.stringify(signForm),
      headers : {
        'Content-Type' : 'application/json'
      }
    })
    
  }

  return (
    <div className={styles.signup_box}>
        {error && <Error text={errorMsg}/>}
        <form method="POST" id="signup_form">
        <input type="text" name='name' placeholder='Enter your name' required onChange={(e) => handleInput(e)}/>
        <input type="number" name="mobile" placeholder='Enter mobile number' required onChange={(e) => handleInput(e)}/>
        <input type="email" name='email' placeholder='Enter password' required onChange={(e) => handleInput(e)}/>
        <input type="password" name='password' placeholder='Enter password'required onChange={(e) => handleInput(e)}/>
        <button type='submit' onClick={(e) => handleSignup(e)}>Signup</button>
        </form>
    </div>
  )
}

export default Signup