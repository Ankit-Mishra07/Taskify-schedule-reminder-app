import React from 'react'

const Error = ({text}) => {
  return (
    <div style={{color:"#fff", 
    backgroundColor:"orangered", width:"100%", 
    textAlign:"center", padding: "5px", borderRadius:"5px"}}>{text}</div>
  )
}

export default Error