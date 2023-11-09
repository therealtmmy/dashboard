import React from "react";
import { FaRegBell, FaSearch, FaSortDown } from "react-icons/fa";
import "./Teachers.css";
import NoTeacher from "./NoTeacher";

const Teachers = () => {
  return (
    <div className="Teacher">
      <div className="TeacherHeader">
        <div className="TeacherNotification">
          <FaRegBell className="Bell" />
          <button className="TeacherButton">Log out</button>
        </div>
      </div>

      <div className="HeadingTwo">
        <p>Teachers</p>

        <div>
          <button>Add Teachers</button>
        </div>
      </div>

      <div className="InputDiv">
        <div>
          <select name="" id="Filter">
            <option value="">
              Filter <FaSortDown />
            </option>
            <option value="">Class</option>
            <option value="">Gender</option>
          </select>
        </div>
        <div className="SecInput">
          <FaSearch className="SearchIcon" />
          <input type="text" placeholder="Search for a teacher by name" />
        </div>
      </div>
      <NoTeacher />
    </div>
  );
};

export default Teachers;
