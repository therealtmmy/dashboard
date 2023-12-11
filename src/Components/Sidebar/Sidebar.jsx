import React from "react";
import "./Sidebar.css";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUser,
  FaCreditCard,
  FaCog,
  FaChartBar,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const iconData = [
    {
      icon: FaHome,
      link: "dashboard",
      name: "Dashboard",
    },
    {
      icon: FaChalkboardTeacher,
      link: "teachers",
      name: "Teachers",
    },
    {
      icon: FaUser,
      link: "students",
      name: "Students/classes",
    },
    {
      icon: FaCreditCard,
      link: "billing",
      name: "Billing",
    },
    {
      icon: FaCog,
      link: "settings",
      name: "Settings and Profile",
    },
    {
      icon: FaChartBar,
      link: "exams",
      name: "Exams",
    },
  ];

  return (
    <div className="Side">
      <div className="Sidebar">
        <div className="Side1">
          <img
            src="https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
            alt="logo"
          />
          <p>Udemy Accelerate</p>
        </div>

        <div className="line"></div>

        <div className="Side2">
          {iconData.map((value, index) => (
            <NavLink
              className="button"
              to={value.link}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#509CDB" : "#152259" };
              }}
              key={index}
            >
              {React.createElement(value.icon, { style: { fontSize: "19px" } })}{" "}
              {value.name}
            </NavLink>
          ))}

          <NavLink
            to="feature"
            id="Feature"
            className="button"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#509CDB" : "#152259" };
            }}
          >
            <FaExternalLinkAlt style={{ fontSize: "19px" }} /> Features
            <span className="New">
              <h5>NEW</h5>
            </span>
          </NavLink>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
