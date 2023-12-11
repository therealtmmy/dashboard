import React from "react";
import { useState } from "react";
import { FaRegBell, FaSearch } from "react-icons/fa";
import "./AddedTeachers.css";
import InSegment from "./InSegment";
// import AddTeachers from "../AddTeachers/AddTeachers";

const AddedTeachers = ({ contact }) => {
  // const showit = () => {
  //   document.getElementsByClassName("AddTeachers")[0].style.display = "block";
  // };
  // const [showInput, setShowInput] = useState(false);
  // const showHide = () => {
  //   setShowInput(!showInput);
  // };

  return (
    <>
      <div className="AddedTeachers">
        <div className="AddedTeacherHeader">
          <div>
            <button onClick="" className="AddedTeacherButton">
              {" "}
              Add Teachers{" "}
            </button>
          </div>

          <div className="AddedTeachNotification">
            <FaRegBell className="Bell" />
            <button className="AddedBtn">Log out</button>
          </div>
        </div>
        {/* <div className="SearchInputDiv">
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
        </div> */}

        <InSegment contact={contact} />
        {/* <div className="InAddition">{showInput ? <AddTeachers /> : null}</div> */}
      </div>
    </>
  );
};

export default AddedTeachers;
