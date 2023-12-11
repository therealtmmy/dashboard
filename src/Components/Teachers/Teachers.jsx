import React from "react";
import { useState } from "react";
import { FaRegBell, FaSearch, FaSortDown } from "react-icons/fa";
import "./Teachers.css";
import NoTeacher from "./NoTeacher";
import AddTeachers from "../AddTeachers/AddTeachers";

const Teachers = () => {
  const [showInput, setShowInput] = useState(false);
  const [search, setSearch] = useState("");

  const showHide = () => {
    setShowInput(!showInput);
  };

  return (
    <>
      <div className="Teacher">
        <div className="Close">
          <div className="TeacherHeader">
            <div className="TeacherNotification">
              <FaRegBell className="Bell" />
              <button className="TeacherButton">Log out</button>
            </div>
          </div>

          <div className="HeadingTwo">
            <p>Teachers</p>

            <div>
              <button onClick={showHide} className="AddTeacherButton">
                {" "}
                Add Teachers{" "}
              </button>
            </div>
          </div>

          <div className="InputDiv">
            <div>
              <select name="" id="Filter">
                <option value="">
                  Filter <FaSortDown />
                </option>
                <option value="">Class</option>
                <option value="">Subject</option>
              </select>
            </div>
            <div className="SecInput">
              <FaSearch className="SearchIcon" />
              <input
                id="teacherInput"
                type="text"
                placeholder="Search for a teacher by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {<NoTeacher />}
        </div>
        {showInput ? (
          <AddTeachers showInput={showInput} showHide={showHide} />
        ) : null}
      </div>
    </>
  );
};

export default Teachers;
