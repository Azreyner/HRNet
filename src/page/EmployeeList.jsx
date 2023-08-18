import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import TableEmploye from "../component/TableEmploye";
import Header from "../component/Header";
import { createPortal } from "react-dom";

const EmployeeList = () => {
  const store = useSelector((state) => state);

  return (
    <div id="employee-div" className="container">
      {createPortal(<Header />, document.body)}
      <TableEmploye />
    </div>
  );
};

export default EmployeeList;
