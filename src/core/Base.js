import React from "react";
import "../App.css";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Description",
  className = "p-2",
  children,
}) => (
  <div>
    <Menu></Menu>
    <div className="container-sm">
      <div className="jumbotron text-center bg-white mt-1">
        <h2 className="display-5">{title}</h2>
        <p className={className}>{description}</p>
      </div>
      <div className={children}>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container-fluid mt-1" style={Styles.textCenter}>
        <span className="text-muted text-center">
          An Amazing{" "}
          <span className="" style={Styles.textColor}>
            {" "}
            <b> Instagram Video </b>{" "}
          </span>
          Downloader.
        </span>
      </div>
    </footer>
  </div>
);

export default Base;

const Styles = {
  backgorund: {
    backgroundColor: "#e4405f",
  },
  textCenter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textColor: {
    color: "#e4405f",
  },
};
