import React from "react";
import "../Login/Link.css";
import { NavLink, Outlet } from "react-router-dom";

const Link = () => {
  return (
    <>
      <div className="link">
        <div className="Heading">
          <img
            className="logo"
            src="https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
            alt="logo"
          />
          <p>Udemy Accelerate</p>
        </div>
        <div className="router">
          <NavLink
            to="hero"
            id="route1"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#509CDB" : "#ffffff",
                color: isActive ? "#ffffff" : "black",
              };
            }}
          >
            Login
          </NavLink>

          <NavLink
            to="signup"
            id="route2"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#509CDB" : "#152259" };
            }}
          >
            Sign Up
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Link;
