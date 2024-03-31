import React from "react";
import OpeningHours from "../components/HomePage/OpeningHours";
import AboutUs from "../components/HomePage/AboutUs";
import SearchADoctor from "../components/HomePage/SearchADoctor";
import Appoinment from "../components/HomePage/Appoinment";
import MakeAnAppointment from "../components/HomePage/MakeAnAppointment";
import OurServices from "../components/HomePage/OurServices";
import PricingPlans from "../components/HomePage/PricingPlans";
const HomePage = () => {
  const myStyle = {
    backgroundImage:
      "url('https://png.pngtree.com/thumb_back/fh260/back_pic/04/04/03/285809807996bcc.jpg')",
    marginTop: "50px",
    width:'100%',
    height: "28rem",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems:'center'
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems:'center' }}>
      <div style={myStyle}>
        <h2>Get one stop solutions for healthcare services</h2>
        <div style={{ display: "flex",flexDirection: "row" }}>
          <button
            style={{
              backgroundColor: "#06A3DA",
              color: "white",
              fontSize: "2rem",
              marginLeft: "1rem",
              height: "4rem",
              borderColor: "#06A3DA",
              borderRadius: "0.5rem",
            }}
          >
            Appoinment
          </button>
          <button
            style={{
              backgroundColor: "#F57E57",
              color: "white",
              fontSize: "2rem",
              marginLeft: "1rem",
              height: "4rem",
              borderColor: "#F57E57",
              borderRadius: "0.5rem",
            }}
          >
            Contact us
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "-2rem",
        }}
      >
        <OpeningHours />
        <SearchADoctor/>
        <Appoinment/>
      </div>
      <AboutUs/>
      <MakeAnAppointment/>
      <OurServices/>
      <PricingPlans/>
    </div>
  );
};

export default HomePage;
