import React from "react";
import "./FormComponent.css";

import user_icon from "../Assets/person-fill.svg";
import password_icon from "../Assets/lock-fill.svg";
import file_icon from "../Assets/file-earmark-arrow-up-fill.svg";

const FormComponent = () => {

  return (
    <div className="container">
      <div className="header">
        <div className="text">Credentials</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {/* <div className="input">
          <img src={user_icon} alt="user icon" />
          <input type="text" placeholder="Domain ID"/>
        </div>
        <div className="input">
          <img src={password_icon} alt="password icon" />
          <input type="password" placeholder="Password"/>
        </div> */}
        <div className="input">
          <img src={file_icon} alt="password icon" />
          <input type="file" name="file" onChange={(e) => this.handleFile(e)} />
        </div>
      </div>
      <div className="submit-container">
        <div className="submit">Submit</div>
      </div>
    </div>
  );
};

export default FormComponent;
