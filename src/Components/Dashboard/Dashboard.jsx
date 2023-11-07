import React from "react";
import { FaRegBell } from "react-icons/fa";
import "./Dashboard.css";
import Welcome from "./Welcome";

const Dashboard = () => {
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
          <button>Log out</button>
        </div>
      </div>
      <Welcome />
    </div>
  );
};

export default Dashboard;
