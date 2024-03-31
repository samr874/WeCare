import React from "react";
import { Checkmark } from 'react-checkmark'

const AboutUs = () => {
    const image = {
        backgroundImage:
          "url('https://themewagon.github.io/dentcare/img/about.jpg')",
        
        width:'100%',
        height:"100%",
      };
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        marginTop: "2.5rem",
        height: "40rem",
        display: "flex",
        flexDirection: "row",
        width: "80rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column",padding:'1.2rem' }}>
        <h4 style={{ color: "blue", fontWeight: "bold" }}>ABOUT US ====--</h4>
        <h1>The Widely Use Service That You Can Trust</h1>
        <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit
          clita duo justo magna dolore
        </p>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.
          Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit,
          sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod
          magna dolore erat amet
        </p>
        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ display: "table-row-group" }}>
            <h5 style={{display:'flex', flexDirection:'row',gap:'1.7rem'}}>
            <Checkmark size='small' color='blue' />Opened 24/7
            </h5>
            <h5 style={{display:'flex', flexDirection:'row',gap:'1.7rem'}}>
            <Checkmark size='small' color='blue' />Opened 24/7
            </h5>
          </div>
          <div style={{ display: "table-row-group" }}>
            <h5 style={{display:'flex', flexDirection:'row',gap:'1.7rem'}}>
            <Checkmark size='small' color='blue' />Opened 24/7
            </h5>
            <h5 style={{display:'flex', flexDirection:'row',gap:'1.7rem'}}>
            <Checkmark size='small' color='blue' />Opened 24/7
            </h5>
          </div>
          
        </div>
        <button style={{backgroundColor:'#06A3DA',height:'2.5rem',width:'10rem',fontWeight:'bold',margin:'10px'}}>Make an Appointment</button>
      </div>
      <img
        src={image.backgroundImage}
        alt="Image description"
        style={image}
      />
    </div>
  );
};

export default AboutUs;
