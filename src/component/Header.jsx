import React from "react";
import { Link } from "react-router-dom";
import "../style/component/header.scss";

function Header() {
  return (
    <div className="header">
      <h1>
        HR<span style={{ color: "#646CFF", fontSize: "64px" }}>.</span>Net
      </h1>
      <div className="header__nav">
        <Link to="/">Home</Link>
        <Link to="/employee-list">Employees list</Link>
      </div>
    </div>
  );
}

export default Header;
