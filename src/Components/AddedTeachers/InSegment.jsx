import React from "react";
import "../AddedTeachers/InSegment.css";

const InSegment = () => {
  return (
    <>
      <div className="InSegment">
        <div>
          <h5>Name</h5>
        </div>
        <div>
          <h5>Subject</h5>
        </div>
        <div>
          <h5>Class</h5>
        </div>
        <div>
          <h5>Email address</h5>
        </div>
        <div>
          <h5>Gender</h5>
        </div>
      </div>

      <div>
        <div className="user">
          <div className="userAvi">
            <img
              className="avatar"
              src="https://xsgames.co/randomusers/assets/avatars/male/62.jpg"
              alt="avatar"
            />
            <p>Joyce Emmanuel</p>
          </div>
          <div>
            <p>Chemistry</p>
          </div>
          <div>
            <p>JSS 2</p>
          </div>
          <div>
            <p>adetutu@gmail.com</p>
          </div>
          <div>
            <p>Female</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InSegment;
