import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const EmployeeList = () => {
  const store = useSelector((state) => state);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <Link to="/">Home</Link>
      {console.log(store)}
    </div>
  );
};

export default EmployeeList;
