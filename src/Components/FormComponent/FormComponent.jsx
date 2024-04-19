import React, { useState } from "react";
import "./FormComponent.css";

import user_icon from "../Assets/person-fill.svg";
import password_icon from "../Assets/lock-fill.svg";
import email_icon from "../Assets/envelope-at-fill.svg";
import file_icon from "../Assets/file-earmark-arrow-up-fill.svg";

const FormComponent = () => {
  const [action, setAction] = useState("Credentials");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign-up" ? (
          <div className="input">
            <img src={email_icon} alt="user icon" />
            <input type="text" placeholder="Email address" />
          </div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="user icon" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign-up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password?
            <span>Click here!</span>
          </div>
        )}
        {/* <div className="input">
          <img src={file_icon} alt="password icon" />
          <input type="file" name="file" onChange={(e) => this.handleFile(e)} />
        </div> */}
      </div>
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign-up");
          }}
        >
          Sign-Up
        </div>
        <div
          className={action === "Sign-up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default FormComponent;
