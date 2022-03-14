import React, { useState } from 'react'
import styles from '../styles/signup.module.css'
import Error from './Error'
const Signup = ({showSignup, setShowSignup}) => {
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState()

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
    }).then((res) => res.json())
    .then((res) => {
      if(res.errors) {
        if(res.errors[0].name) setErrorMsg(res.errors[0].name);
        if(res.errors[0].email) setErrorMsg(res.errors[0].email);
        if(res.errors[0].mobile) setErrorMsg(res.errors[0].mobile);
        if(res.errors[0].password) setErrorMsg(res.errors[0].password);

       setError(true)
      }else {
        console.log(res)
        if(res.status === 'Failed') {
          setError(true)
          setErrorMsg("Please try with different data")
          return
        }
        setError(false)
        setShowSignup(false)

      }
    })
    .catch((e) => {
      setError(true)
      setErrorMsg("Please try with different data")
    })

  }

  return (
    <div className={styles.signup_box}>
        {error && 
          <Error text={errorMsg} />
        }
        <form method="POST" className={styles.signup_form}>
        <input type="text" name='name' placeholder='Enter your name' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="number" name="mobile" placeholder='Enter mobile number' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="email" name='email' placeholder='Enter email' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="password" name='password' placeholder='Enter password'required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <div>
        <button type='submit' onClick={(e) => handleSignup(e)}>Signup</button>
        <button>Already have an account</button>
        </div>
        </form>
    </div>
  )
}

export default Signup