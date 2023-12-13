import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEyeSlash,
  faEye,
  faCircleCheck,
} from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Hero = ({ setUser }) => {
  const [emailPassword, setEmailPassword] = useState({
    email: "",
    password: "",
  });
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [unveil, setUnveil] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [successfulPassword, setSuccessfulPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const showPasscode = () => {
    setUnveil(!unveil);
  };

  const navigate = useNavigate();

  const submit = () => {
    // Display Error
    if (emailPassword.email || emailPassword.password === "") {
      setShowEmail(true);
      setShowPassword(true);
      setLoading(false);
    } else {
      setShowEmail(false);
      setShowPassword(false);
      setLoading(true);
    }

    // Firebase Authentication
    setLoading(true);
    signInWithEmailAndPassword(
      auth,
      emailPassword.email,
      emailPassword.password
    )
      .then((userCredential) => {
        setLoading(true);
        if (userCredential) {
          setSuccessfulPassword(true);
          setInvalidPassword(false);
          setLoading(true);
          setEmailPassword("");
        }

        setUser({ email: emailPassword.email });

        navigate("/dashboard");
      })
      .catch((error) => {
        // Display Error
        setLoading(false);
        console.log(error);
        if (emailPassword.password === "") {
          return;
        }
        setInvalidPassword(true);
        setSuccessfulPassword(false);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  };

  return (
    <div className="Hero">
      <div>
        <h2>Login to your Account</h2>
        <p>Welcome back!</p>

        {/* Input Area */}

        <div id="EmailDiv">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "13px" }} />
          <input
            type="email"
            placeholder="Email"
            value={emailPassword.email}
            onChange={(e) =>
              setEmailPassword({ ...emailPassword, email: e.target.value })
            }
            onBlur={() => setShowEmail(true)}
            autoComplete="on"
          />
        </div>
        {showEmail && emailPassword.email === "" ? (
          <p className="mailError">Email cannot be empty</p>
        ) : null}

        <div id="PasswordDiv">
          <FontAwesomeIcon icon={faLock} style={{ fontSize: "13px" }} />
          <input
            type={unveil ? "text" : "password"}
            placeholder="Password"
            value={emailPassword.password}
            onChange={(e) =>
              setEmailPassword({
                ...emailPassword,
                password: e.target.value,
              })
            }
            max={6}
            autoComplete="on"
            onBlur={() => setShowPassword(true)}
          />
          {!unveil ? (
            <FontAwesomeIcon
              onClick={showPasscode}
              icon={faEyeSlash}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={showPasscode}
              icon={faEye}
              style={{ fontSize: "13px", cursor: "pointer" }}
            />
          )}
        </div>
        {showPassword && emailPassword.password === "" ? (
          <p className="PasswordError">Password cannot be empty</p>
        ) : null}

        {/* Invalid Password */}
        {invalidPassword ? (
          <p className="PasswordError">Invalid Password or Email Address</p>
        ) : null}

        {/* Successful Password */}
        {successfulPassword ? (
          <div id="PasswordSuccessDiv">
            {" "}
            <p>Successful</p> <FontAwesomeIcon icon={faCircleCheck} />
          </div>
        ) : null}

        <a href="">Forgot Password?</a>
        <br />
        <button onClick={submit} className="LoginBtn">
          Log in
        </button>

        <br />

        {/* Footer */}
        <span className="footer">
          Don't have an account?
          <a href="#signup">Click on Sign Up</a>
        </span>
      </div>

      <div>
        <img
          className="otherimg"
          src="https://img.freepik.com/free-vector/exams-concept-illustration_114360-2754.jpg?w=740&t=st=1701212835~exp=1701213435~hmac=83f6a9bbf254a7c10f9e37237d7f112b631fde562c58063f93afd0d562723800"
          alt="A boy studying"
        />
      </div>
      {loading ? (
        <>
          <div className="text-spinner-overlay">
            {" "}
            <img
              className="logo"
              src="https://i.pinimg.com/originals/f9/6a/26/f96a261e5a60d7d66b36e2850e3eb19b.png"
              alt="logo"
            />
            <span style={{ marginLeft: "-40px" }}>Udemy Accelerate</span>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Hero;
