import React from "react";

const MakeAnAppointment = () => {
  const options = ["Option 1", "Option 2", "Option 3"];

  const handleChange = (event) => {
    console.log("Selected option:", event.target.value);
  };
  const myStyle = {
    backgroundImage:
      "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-0jNSXBBW_9OCWy7lJytoCEKl_DA4lIGBUQ&usqp=CAU')",
    marginTop: "50px",
    width: "100%",
    height: "29rem",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyItems: "center",
  };
  return (
    <div style={myStyle}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "120rem",
          backgroundColor: "whitesmoke",
          height: "20rem",
          padding: "2rem",
        }}
      >
        <h1>Listed top notch services</h1>
        <p style={{ fontSize: "17px" }}>
          Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
          ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum
          sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et.
          Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
          dolore sanctus sed et. Takimata takimata sanctus sed.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems:'center',
          backgroundColor: "#06a3da",
          width: "110rem",
          height: "100%",
        }}
      >
        <h1>Make an appointment</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          <select
            onChange={handleChange}
            value={options[0]}
            style={{ width: "15.5rem", height: "2rem" }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            onChange={handleChange}
            value={options[0]}
            style={{ width: "15.5rem", height: "2rem" }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <input type="text" style={{ width: "15rem", height: "2rem" }} />
          <input type="text" style={{ width: "15rem", height: "2rem" }} />
          <input type="text" style={{ width: "15rem", height: "2rem" }} />
          <input type="text" style={{ width: "15rem", height: "2rem" }} />
        </div>
        <button style={{backgroundColor:'#091e3e',color:'white',fontWeight:'bold',width:'20rem',height:'4rem'}}>Make Appoinment</button>
      </div>
    </div>
  );
};

export default MakeAnAppointment;
