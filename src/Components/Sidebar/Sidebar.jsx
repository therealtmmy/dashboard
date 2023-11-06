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

const Sidebar = () => {
  const iconData = [
    {
      icon: FaHome,
      name: "Dashboard",
    },
    {
      icon: FaChalkboardTeacher,
      name: "Teachers",
    },
    {
      icon: FaUser,
      name: "Students/classes",
    },
    {
      icon: FaCreditCard,
      name: "Billing",
    },
    {
      icon: FaCog,
      name: "Settings and Profile",
    },
    {
      icon: FaChartBar,
      name: "Exams",
    },
  ];

  return (
    <>
      <div className="Sidebar">
        <div className="Side1">
          <img
            src="https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
            alt="Winner Chaper Logo"
          />
          <p>Udemy Accelerate</p>
        </div>

        <div className="line"></div>

        <div className="Side2">
          {iconData.map((value, index) => (
            <button key={index}>
              {React.createElement(value.icon, { style: { fontSize: "19px" } })}{" "}
              {value.name}
            </button>
          ))}

          <button className="Feature">
            <FaExternalLinkAlt style={{ fontSize: "19px" }} /> Feature
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
