import React from "react";

const OpeningHours = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "19rem",
        height: "20rem",
        padding:"1.5rem",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor:'#06a3da'
      }}
    >
    <h2 style={{color:'white', fontWeight:'bold'}}>Opening Hours</h2>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
       
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
       <div style={{color:'white'}}>Mon - Fri</div>
       <div style={{color:'white'}}>8:00AM - 9:00PM</div>
       </div>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:"20px"}} >
       <div style={{color:'white'}}>Mon - Fri</div>
       <div style={{color:'white'}}>8:00AM - 9:00PM</div>
       </div>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:"20px"}} >
       <div style={{color:'white'}}>Mon - Fri</div>
       <div style={{color:'white'}}>8:00AM - 9:00PM</div>
       </div>
       
        <button style={{alignText:'center', color:'blue',height:"45px",fontWeight:'bold', fontSize:'15px', marginTop:'1rem'}}>Appointment</button>
      </div>
    </div>
  );
};

export default OpeningHours;
