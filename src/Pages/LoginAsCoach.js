import React from "react";
import LoginAsHealth from "../components/HomePage/Login/LoginAsHealth";

const LoginAsCoach = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection:'column',
        justifyItems: "center",
        alignItems: "center"
      }}
    >
      <LoginAsHealth />
    </div>
  );
};

export default LoginAsCoach;
