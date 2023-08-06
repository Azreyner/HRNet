import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TableEmploye from "../component/TableEmploye";

const EmployeeList = () => {
  const store = useSelector((state) => state);

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table id="employee-table" className="display"></table>
      <TableEmploye />
      <Link to="/">Home</Link>
    </div>
  );
};

export default EmployeeList;
