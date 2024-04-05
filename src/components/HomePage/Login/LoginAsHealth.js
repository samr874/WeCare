import React from 'react'

const LoginAsHealth = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',backgroundColor:'lavender',width:'25rem',height:'29rem',marginTop:'9rem',justifyItems:'center',alignItems:'center'}}>
    <h2>Login as coach</h2>
     <input  style={{width:'20rem',height:'2.9rem',marginTop:'4rem'}} type='Coach id'/>
     <input style={{width:'20rem',height:'2.9rem',marginTop:'1.2rem'}} type='Password'/>
     <button style={{width:'9rem',height:'2.9rem',marginTop:'1.2rem',backgroundColor:'voilet'}}>Login</button>
    </div>
  )
}

export default LoginAsHealth