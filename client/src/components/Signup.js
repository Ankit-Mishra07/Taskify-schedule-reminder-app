import React, { useState } from 'react'
import styles from '../styles/signup.module.css'
import Error from './Error'
import swal from 'sweetalert'
const Signup = ({showSignup, setShowSignup, setShowLogin}) => {
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

    fetch('https://thawing-dawn-23134.herokuapp.com/user/register', {
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
          setErrorMsg("Please try with different data, mobile number might be already registered")
          return
        }
        setError(false)
        setShowSignup(false)
        swal("Thank You", "You have Signed in, Please login!", "success");
        setShowLogin(true)

      }
    })
    .catch((e) => {
      setError(true)
      setErrorMsg("Please try with different data")
    })

  }

  return (
    <div className={styles.signup_box}>

        <button className={styles.cut } onClick={() => setShowSignup(false)}>X</button>
        {error && 
          <Error text={errorMsg} />
        }
        <form method="POST" className={styles.signup_form}>
        <input type="text" name='name' placeholder='Enter your name' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="number" name="mobile" placeholder='Enter mobile number' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="email" name='email' placeholder='Enter email' required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <input type="password" name='password' placeholder='Enter password'required onChange={(e) => handleInput(e)} autoComplete="off"/>
        <div className={styles.signup_btn_box}>
        <button onClick={() => {
          setShowSignup(false)
          setShowLogin(true)
        }}>Already have an account</button>
        <button type='submit' onClick={(e) => handleSignup(e)}>Signup</button>
        </div>
        </form>
    </div>
  )
}

export default Signup