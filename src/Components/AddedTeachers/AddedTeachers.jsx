import React from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import "./AddedTeachers.css";
import InSegment from "./InSegment";

const AddedTeachers = () => {
  return (
    <div className="AddedTeachers">
      <div className="AddedTeacherHeader">
        <div>
          <button className="AddedTeacherButton"> Add Teachers </button>
        </div>

        <div className="AddedTeachNotification">
          <FaRegBell className="Bell" />
          <button className="AddedButton">Log out</button>
        </div>
      </div>
      <div className="SearchInputDiv">
        <div>
          <select name="" id="Filter">
            <option value="">Filter</option>
            <option value="">Class</option>
            <option value="">Subject</option>
          </select>
        </div>
        <div className="SecInput">
          <FaSearch className="SearchIcon" />
          <input type="text" placeholder="Search for a teacher by name" />
        </div>
      </div>
      <InSegment />
    </div>
  );
};

export default AddedTeachers;
