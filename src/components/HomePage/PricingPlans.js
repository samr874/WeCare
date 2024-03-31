import React from "react";

const PricingPlans = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop:'5rem',padding:'2.5rem',gap:'2.5rem' }}>
      <div style={{ display: "flex", flexDirection: "column" , padding:'5rem' }}>
        <h2>PRICING PLAN</h2>
        <h1>We Offer Fair Prices for Dental Treatment</h1>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
          Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit,
          sed stet no labore lorem sit. Sanctus clita duo justo eirmod magna
          dolore erat amet
        </p>
        <h2>CALL FOR APPOINMENT</h2>
        <h1>+012 345 6789</h1>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmN2TRqO_mNK6VWFp9jaXc_eD5gblCYoWfg&usqp=CAU"} style={{height:'25rem',width:'20rem'}} alt="Image from Unsplash" />
      <div style={{display:'flex',flexDirection:'column',backgroundColor:'lavenderblush',alignItems:'center',padding:'0.9rem',width:'20rem'}}>
         <h2>Monthly Subscription</h2>
         <ul>
            <li>Active maintainance</li>
            <li>24/7 user support</li>
            <li>Active chat spport</li>
         </ul>
         <button style={{backgroundColor:'indigo',height:'2.2rem',padding:'0.4rem',color:'white',fontWeight:'bold'}}>Purchase</button>
      </div>
      </div>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW773Sh0GIeUH5XLZc_CDo4NBYSTLEGrkQNNgjInYKp9XqutGi34ojVvHt4Q&s"} style={{height:'25rem',width:'20rem'}} alt="Image from Unsplash" />
      <div style={{display:'flex',flexDirection:'column',backgroundColor:'lavenderblush',alignItems:'center',padding:'0.9rem',width:'20rem'}}>
         <h2>Yearly Subscription</h2>
         <ul>
            <li>Active maintainance</li>
            <li>24/7 user support</li>
            <li>Active chat spport</li>
         </ul>
         <button style={{backgroundColor:'indigo',height:'2.2rem',padding:'0.4rem',color:'white',fontWeight:'bold'}}>Purchase</button>
      </div>
      
      </div>
      
    </div>
  );
};

export default PricingPlans;
