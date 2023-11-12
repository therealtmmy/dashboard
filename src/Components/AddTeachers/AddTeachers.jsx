import React from "react";
import { useState } from "react";
import { FaPlusCircle, FaRegTimesCircle } from "react-icons/fa";
import "./AddTeachers.css";

const AddTeachers = () => {
  const [teachers, setTeachers] = useState([
    {
      img: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
      name: "Joyce Emmanuel",
      subject: "Chemistry",
      class: "JSS 2",
      email: "adesolaadetutu@gmail.com",
      gender: "Female",
    },
  ]);
  const [cancelBtn, setCancelBtn] = useState(true);
  const cancel = () => {
    setCancelBtn(!cancelBtn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTeachers((prevTeachers) => ({ ...prevTeachers }));
    console.log(teachers);
  };

  return (
    <>
      {cancelBtn ? (
        <div className="AddTeachers">
          <form onSubmit={handleSubmit}>
            <div className="AddTeacherImage">
              <h2>Add Teachers</h2>
              <div>
                <p style={{ fontSize: "14px" }}>Upload Avatar</p>
                <input
                  className="file"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const imageUrl = URL.createObjectURL(file);
                    setTeachers({ ...teachers, img: imageUrl });
                  }}
                />
              </div>
            </div>
            <div>
              <p style={{ fontSize: "14px" }}>Full Name</p>
              <input
                className="fullname"
                type="text"
                value={teachers.name}
                onChange={(e) =>
                  setTeachers({ ...teachers, name: e.target.value })
                }
              />

              <div className="Email">
                <div>
                  <p style={{ fontSize: "14px" }}>Email Address</p>
                  <input
                    className="email"
                    type="email"
                    value={teachers.email}
                    onChange={(e) =>
                      setTeachers({ ...teachers, email: e.target.value })
                    }
                  />
                </div>

                <select
                  className="Class"
                  value={teachers.class}
                  onChange={(e) =>
                    setTeachers({ ...teachers, class: e.target.value })
                  }
                >
                  <option value="Class">Class</option>
                  <option value="JSS 1">JSS 1</option>
                  <option value="JSS 2">JSS 2</option>
                  <option value="JSS 3">JSS 3</option>
                  <option value="SS1">SS1</option>
                  <option value="SS2">SS2</option>
                  <option value="SS3">SS3</option>
                </select>
                <select
                  className="Gender"
                  value={teachers.gender}
                  onChange={(e) =>
                    setTeachers({ ...teachers, gender: e.target.value })
                  }
                >
                  <option value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="Subject">
                <div>
                  <p style={{ fontSize: "14px" }}>Phone number</p>
                  <input className="phoneNumber" type="text" />
                </div>

                <select
                  className="SubjectDropdown"
                  value={teachers.subject}
                  onChange={(e) =>
                    setTeachers({ ...teachers, subject: e.target.value })
                  }
                >
                  <option value="Subject">Subject</option>
                  <option value="Maths">Maths</option>
                  <option value="French">French</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Accounting">Accounting</option>
                  <option value="CRS">CRS</option>
                  <option value="Politics">Politics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Geography">Geography</option>
                  <option value="English">English</option>
                  <option value="Social Studies">Social Studies</option>
                  <option value="Home Economics">Home Economics</option>
                </select>
              </div>
            </div>
            <div className="addTeachersBtns">
              <button className="AddTeacherButton">
                <FaPlusCircle />
                Add Teacher
              </button>

              <button onClick={cancel} className="CancelTeacherButton">
                <FaRegTimesCircle />
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default AddTeachers;
