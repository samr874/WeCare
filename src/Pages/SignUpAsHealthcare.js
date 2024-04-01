import React,{useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@mui/material/TextField';
import { CalendarToday, TodayOutlined} from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';

function GridContainer() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (date) => setSelectedDate(date);
  return (
    <div style={{display:'flex',flexDirection:'column',justifyItems:'center',alignItems:'center',height:'100%'}}>
    
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent:'center',
        alignItems: "center",
        width:'65rem',
        height:'22rem', 
        marginTop:'7rem',
        padding:'2rem',
        backgroundColor:'lavender'
      }}
    >
    <h2>Register as  health practioner</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto",
          width: "55rem",
          marginTop: "1rem",
          
        }}
      >
        <div>
          <p>Name</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: "70%", height: "40%" }}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: "70%", height: "40%" }}
          />
        </div>
        <div>
        <p>DOB</p>
        <input type="date" id="birthday" name="birthday" required
            style={{ width: "70%", height: "40%" }} />
        </div>
        <div>
          <p>Gender</p>
          Male
          <input
            type="radio"
            id="name"
            name="name"
            required
            
          />
          Female
          <input
            type="radio"
            id="name"
            name="name"
            required
            
          />
           Others
          <input
            type="radio"
            id="name"
            name="name"
            required
            
          />
        </div>
        <div>
          <p>Mobile Number</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: "70%", height: "40%" }}
          />
        </div>
        <div>
          <p>Speciality</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: "70%", height: "40%" }}
          />
        </div>
      
      </div>
      <button
        style={{
          backgroundColor: "blueviolet",
          width: "20rem",
          height: "6rem",
          color: "white",
          marginTop:'2rem',
          fontWeight: "bold",
        }}
      >
        Register
      </button>
    </div>
    </div>
  );
}

export default GridContainer;
