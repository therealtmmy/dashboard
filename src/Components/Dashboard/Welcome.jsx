import React from "react";
import "./Welcome.css";
import { FaUser, FaAddressCard, FaGraduationCap } from "react-icons/fa";

const data = [
  {
    icon: FaUser,
    heading: "Add other admins",
    text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!",
  },
  {
    icon: FaAddressCard,
    heading: "Add classes",
    text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!",
  },
  {
    icon: FaGraduationCap,
    heading: "Add students",
    text: "Create rich course content and coaching products for your students. When you give them a pricing plan, they'll appear on your site!",
  },
];

const Admin = ({ value }) => (
  <div className="AdminBoard">
    <div>{React.createElement(value.icon, { className: "Icon" })}</div>

    <div>
      <h2>{value.heading}</h2>
      <p className="AdminText">{value.text}</p>
    </div>
  </div>
);

const Welcome = ({ user }) => {
  console.log(user);
  return (
    <div className="Welcome">
      <h1>Welcome to your dashboard, Udemy School</h1>
      <h3 className="mail">{user?.email}</h3>
      {data.map((value, index) => (
        <Admin key={index} value={value} />
      ))}
    </div>
  );
};

export default Welcome;
