import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "blue",
        width: "100%",
        height: "10%",
        paddingVertical: "4rem",
      }}
    >
      <div>
        <h1 style={{ color: "lavender",justifyItems:'center',alignItems:'center' }}>WeCare</h1>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap:'4rem',justifyItems:'center',alignItems:'center', paddingLeft:'2.5rem',paddingRight:'2.5rem' }}>
        <NavLink to="/" style={{ color: "lavender", fontWeight: "bold" }}>
          Home
        </NavLink>
        <NavLink to="/about" style={{ color: "lavender", fontWeight: "bold" }}>
          About
        </NavLink>
        <NavLink to="/login" style={{ color: "lavender", fontWeight: "bold" }}>
          Login
        </NavLink>
        <NavLink to="/about" style={{ color: "lavender", fontWeight: "bold" }}>
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
