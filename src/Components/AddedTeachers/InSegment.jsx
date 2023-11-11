import React from "react";
import "../AddedTeachers/InSegment.css";

const Teachers = [
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
    name: "Joyce Emmanuel",
    subject: "Chemistry",
    class: "JSS 2",
    email: "adesolaadetutu@gmail.com",
    gender: "Female",
  },

  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
    name: "Joyce Emmanuel",
    subject: "Chemistry",
    class: "JSS 2",
    email: "adesolaadetutu@gmail.com",
    gender: "Female",
  },

  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
    name: "Joyce Emmanuel",
    subject: "Chemistry",
    class: "JSS 2",
    email: "adesolaadetutu@gmail.com",
    gender: "Female",
  },
];

const Teacher = ({ data }) => (
  <div>
    <div className="user">
      <div className="userAvi">
        <img className="avatar" src={data.img} alt="avatar" />
        <p>{data.name}</p>
      </div>
      <div>
        <p>{data.subject}</p>
      </div>
      <div>
        <p>{data.class}</p>
      </div>
      <div>
        <p>{data.email}</p>
      </div>
      <div>
        <p>{data.gender}</p>
      </div>
    </div>
  </div>
);

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
      {Teachers.map((data, index) => (
        <Teacher key={index} data={data} />
      ))}
    </>
  );
};

export default InSegment;
