import React from "react";
import { FaRegBell } from "react-icons/fa";
import "./Dashboard.css";
import Welcome from "./Welcome";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ user, userName }) => {
  const navigate = useNavigate();
  const LogOut = () => {
    navigate("/Hero");
  };

  return (
    <div className="Dashboard">
      {/* HEADER SESSION */}
      <div className="Header">
        <div>
          <h4>Learn how to launch faster</h4>
          <p>
            watch our webinar for tips from our experts and get a limited time
            offer.
          </p>
        </div>

        <div className="Notification">
          <FaRegBell className="Bell" />
          <button onClick={LogOut} id="btn">
            Log out
          </button>
        </div>
      </div>
      <Welcome user={user} userName={userName} />
    </div>
  );
};

export default Dashboard;
