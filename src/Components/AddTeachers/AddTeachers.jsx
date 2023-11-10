import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import "./AddTeachers.css";

const AddTeachers = () => {
  return (
    <div className="AddTeachers">
      <div className="AddTeacherImage">
        <h2>Add Teachers</h2>
        <div>
          <p style={{ fontSize: "14px" }}>Upload Avatar</p>
          <input className="file" type="file" />
        </div>
      </div>
      <div>
        <p style={{ fontSize: "14px" }}>Full Name</p>
        <input className="fullname" type="text" />

        <div className="Email">
          <div>
            <p style={{ fontSize: "14px" }}>Email Address</p>
            <input className="email" type="email" />
          </div>

          <select className="Class" name="" id="">
            <option value="">Class</option>
            <option value="">JSS1</option>
            <option value="">JSS2</option>
            <option value="">JSS3</option>
            <option value="">SS1</option>
            <option value="">SS2</option>
            <option value="">SS3</option>
          </select>
          <select className="Gender" name="" id="">
            <option value="">Gender</option>
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>

        <div className="Subject">
          <div>
            <p style={{ fontSize: "14px" }}>Phone number</p>
            <input className="phoneNumber" type="text" />
          </div>

          <select className="SubjectDropdown" name="" id="">
            <option value="">Subject</option>
            <option value="">Maths</option>
            <option value="">French</option>
            <option value="">Chemistry</option>
            <option value="">Physics</option>
            <option value="">Accounting</option>
            <option value="">CRS</option>
            <option value="">Politics</option>
            <option value="">Chemistry</option>
            <option value="">Geography</option>
            <option value="">English</option>
            <option value="">Social Studies</option>
            <option value="">Home Economics</option>
          </select>
        </div>
      </div>
      <button className="AddTeacherButton">
        <FaPlusCircle />
        Add Teacher
      </button>
    </div>
  );
};

export default AddTeachers;
