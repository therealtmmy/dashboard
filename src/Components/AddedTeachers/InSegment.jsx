import React from "react";
import "../AddedTeachers/InSegment.css";

const Teacher = ({ data }) => (
  <div>
    <table className="user">
      <tr>
        <td>
          {" "}
          <div className="userAvi">
            <img className="avatar" src={data.img} alt="avatar" />
            <p>{data.name}</p>
          </div>
        </td>
        <td>{data.subject}</td>
        <td>{data.class}</td>
        <td>{data.email}</td>
        <td>{data.gender}</td>
      </tr>
    </table>
  </div>
);

const InSegment = ({ contact }) => {
  return (
    <>
      <table className="InSegment">
        <tr>
          <th>Name</th>
          <th>Subject</th>
          <th>Class</th>
          <th>Email address</th>
          <th>Gender</th>
        </tr>
      </table>
      {contact.map((data, index) => (
        <Teacher key={index} data={data} />
      ))}
    </>
  );
};

export default InSegment;
