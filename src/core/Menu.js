import React from "react";
import { Link, withRouter } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#e4405f" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs p-2" >
        <li className="nav-item">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to="/"
            replace
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
        <Link
          style={currentTab(history, "/about")}
          className="nav-link"
          to="/"
          replace
        >
          About
        </Link>
      </li>
      <li className="nav-item">
      <Link
        style={currentTab(history, "/contactus")}
        className="nav-link"
        to="/"
        replace
      >
        Contact Us
      </Link>
    </li>
      </ul>
    </div>
  );
};

export default withRouter(Menu);
