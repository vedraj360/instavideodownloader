import React, { useState } from "react";
import { MDBNotification } from "mdbreact";
import Base from "./Base";
import Downloader from "./helper/Downloader";
import { urlConverter, urlVaildator } from "./helper/Helper";

import "../App.css";

const Home = () => {
  const [values, setValues] = useState({
    url: "",
    loading: false,
    error: "",
  });

  const { url, error, loading } = values;

  const handleChange = (url) => (event) => {
    console.log(event.target.value);
    setValues({ ...values, error: false, [url]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    console.log("loading " + loading);

    let vid_Url = urlConverter(url);
    if (urlVaildator(vid_Url)) {
      Downloader(vid_Url)
        .then((response) => {
          console.log("res " + response);
          setValues({ ...values, error: false, loading: false, url: "" });
        })
        .catch((err) => {
          console.log("ksaldslkamdsa");
          setValues({ ...values, error: false, loading: false, url: "" });
        });
    } else {
      setValues({
        ...values,
        error: "Invalid Link! Please check the link and try again",
        loading: false,
        url: "",
      });
      console.log("vid");
    }
  };

  const progressLoader = () => {
    if (loading) {
      return (
        <div style={Styles.alignCenter}>
          <button className="btn btn-outline-dark mt-1" type="button" disabled>
            {" "}
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span> </span>
            Downloading
          </button>
        </div>
      );
    } else {
      return (
        <div style={Styles.alignCenter}>
          <button className="btn btn-outline-dark mt-1" onClick={onSubmit}>
            Download
          </button>
        </div>
      );
    }
  };

  const showToast = () => {
    if (loading) {
      return (
        <MDBNotification
          show
          fade
          icon="bell"
          iconClassName="text-primary"
          title="Downloader"
          message="Hello, Downloading started!"
          titleClassName="elegant-color-dark"
          style={{
            color: "#e4405f",
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 9999,
          }}
        />
      );
    }
  };

  const errorInfo = () => {
    if (error) {
      return (
        <div className="d-flex justify-content-center">
          <div className="alert alert-danger w-50" role="alert">
            {error}
          </div>
        </div>
      );
    }
  };
  const inputLayout = () => {
    return (
      <div className="container-md">
        <div className="input-group mb-3">
          <input
            type="text"
            onChange={handleChange("url")}
            value={url}
            placeholder="Instragram URL"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
        </div>

        {progressLoader()}
      </div>
    );
  };

  return (
    <Base title="Instagram Video Downloader" description="">
      {errorInfo()}
      {inputLayout()}
      {showToast()}
    </Base>
  );
};

export default Home;

const Styles = {
  alignCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
