import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5rem',alignItems: 'center', justifyContent: 'center',width:'100%',marginTop:'10rem'}}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4em', backgroundColor: 'lavenderblush', width: '30%', height: '27rem',justifyContent:'center',alignItems:'center',padding:'2rem',borderRadius:'2rem', borderTopWidth:'2rem',border: '2px solid #ddd' }}>
        <h4>Register yourself as practioner or healthcare individuals</h4>
          <img src={'https://cdn.iconscout.com/icon/premium/png-512-thumb/doctor-avatar-6108239-5429067.png?f=webp&w=256'} style={{ width: '9rem', height: '10rem' }} />
          <NavLink to="/loginAsCoach"><button  style={{backgroundColor:'blue',width:'10rem',height:'2.9rem',fontWeight:'bolder',color:'white'}}>Login</button></NavLink>
          <NavLink to="/loginAsHealthcare"><button  style={{backgroundColor:'blue',width:'10rem',height:'2.9rem',fontWeight:'bolder',color:'white'}}>Register</button></NavLink>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4em', backgroundColor: 'lavenderblush', width: '30%', height: '27rem',justifyContent:'center',alignItems:'center',padding:'2rem', borderRadius:'2rem',border: '2px solid #ddd'}}>
        <h4>Register yourself as practioner or healthcare individuals</h4>
          <img src={'https://cdn.iconscout.com/icon/premium/png-512-thumb/fever-kid-2649360-2820831.png?f=webp&w=256'} style={{ width: '9rem', height: '10rem' }} />
          <button  style={{backgroundColor:'blue',width:'10rem',height:'2.9rem',fontWeight:'bolder',color:'white'}}>Login</button>
          <button  style={{backgroundColor:'blue',width:'10rem',height:'2.9rem',fontWeight:'bolder',color:'white'}}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
