import React,{useState} from "react";

const SearchADoctor = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const handleChange = (event) => {
      console.log('Selected option:', event.target.value);
    };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "19rem",
        height: "20rem",
        padding: "1.5rem",
        alignContent: "center",
        justifyContent:'center',
        backgroundColor: "#091e3e",
      }}
    >
      
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
      <h2 style={{color:'white',fontWeight:'bold'}}>Find a doctor</h2>
      <input type="text" id="name" style={{height:'2.5rem'}} placeholder="Appointment Date" />
      <select  style={{height:'2.5rem',marginTop:'1rem'}} onChange={handleChange} value={options[0]}> {/* Set initial value */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
       <button style={{marginTop:'1rem',height:'2.5rem',fontWeight:'bold'}}>Search a Doctor</button>
      </div>
      
    </div>
  );
};

export default SearchADoctor;
