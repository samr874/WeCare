import React from 'react'

const Login = () => {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyItems:'center',alignItems:'center',gap:'5rem'}}>
        <div style={{display:'flex',flexDirection:'column',gap:'4em'}}>
           <img src={'https://img.freepik.com/free-photo/doctor-made-out-paper_23-2148820841.jpg?size=626&ext=jpg&ga=GA1.1.318366619.1711909007&semt=ais'} style={{width:'9rem',height:'10rem'}}/>
           <button>Login </button>
           <button>Register </button>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'4em'}}>
           <img src={'https://img.freepik.com/free-photo/doctor-made-out-paper_23-2148820841.jpg?size=626&ext=jpg&ga=GA1.1.318366619.1711909007&semt=ais'} style={{width:'9rem',height:'10rem'}}/>
           <button>Login </button>
           <button>Register </button>
        </div>
    </div>
  )
}

export default Login