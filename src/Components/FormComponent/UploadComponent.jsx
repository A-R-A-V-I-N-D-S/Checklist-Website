import React, { Component } from "react";
import "./FormComponent.css";
import file_icon from "../Assets/file-earmark-arrow-up-fill.svg";
import axios from "axios";

class UploadComponent extends Component {
  state = {
    file: null,
  };
  handleFile(e) {
    console.log(e.target.files, "$$$$");
    console.log(e.target.files[0], "$$$$");
    let file = e.target.files[0];
    this.setState({ file: file });
  }
  handleUpload(e) {
    console.log(this.state, "The state is ---$$$$---");

    let file = this.state.file;
    let formdata = new FormData();

    formdata.append("file", file);

    axios({
      method: "POST",
      url: "http://localhost:8080/jobs/upload-jobs-details",
      data: formdata,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDownload(e) {
    axios({
      method: "GET",
      url: "http://localhost:8080/jobs/download-excel",
      // headers:{
      //     "Content-Disposition": "attachment;filename=Checklist.xlsx",
      //     "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      responseType: "blob",
      // }
    })
      .then((res) => {
        console.log(res.status);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Checklist.xlsx`);
        document.body.appendChild(link);
        link.click();
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="text">Credentials</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={file_icon} alt="password icon" />
            <input
              type="file"
              name="file"
              onChange={(e) => this.handleFile(e)}
            />
          </div>
        </div>
        <div className="submit-container">
          <button className="submit" onClick={(e) => this.handleUpload(e)}>
            Upload
          </button>
          <button className="submit" onClick={(e) => this.handleDownload(e)}>
            Download
          </button>
        </div>
      </div>
    );
  }
}

export default UploadComponent;
