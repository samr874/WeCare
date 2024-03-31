import React from 'react'

const OurServices = () => {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        marginTop:'5rem',
        
    }}>
       
        <div style={{display:'flex',flexDirection:'row',columnGap:'4rem'}}>
        <img src={"https://themewagon.github.io/dentcare/img/after.jpg"} style={{height:'25rem'}} alt="Image from Unsplash" />
         <div style={{display:'flex',flexDirection:'column'}}>
           <h2 style={{color:'indigo',fontWeight:'bold'}}>OUR SERVICES</h2>
           <h1 style={{fontFamily:'serif',fontSize:'2.5rem'}}>We make you connected to heathcare services on a click</h1>
           <div style={{display:'flex',flexDirection:'row',gap:'4rem',justifyContent:'space-evenly'}}>
           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW773Sh0GIeUH5XLZc_CDo4NBYSTLEGrkQNNgjInYKp9XqutGi34ojVvHt4Q&s"} style={{height:'15rem',width:'20rem'}} alt="Image from Unsplash" />
           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy35AepnyxK8xJzBAufuVJEKwVphWBc1NSU07My3PpCGPGLRAF8QrKsnMGcNZ4AuJnX0U&usqp=CAU"} style={{height:'15rem',width:'20rem'}} alt="Image from Unsplash" />
           </div>
         </div>

        </div>
    </div>
  )
}

export default OurServices