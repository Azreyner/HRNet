import React from "react";
import { states } from "../data.js";
import { Link } from "react-router-dom";
import "../style/component/formulaireEmployee.scss";

const FormulaireEmployee = () => {
  /*const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Joe",
      type: "admin",
    },
  ]);*/

  return (
    <div className="formulaire" id="formulaire">
      {/*<h2 className="formulaire__titre">Create Employee</h2>*/}
      <form action="#" className="formulaire__form" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />

        <fieldset className="formulaire__fieldset">
          <div className="formulaire__fieldset--legend">
            <legend>Address</legend>
            <div></div>
          </div>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state">
            {states.map((item, index) => {
              return (
                <option key={index} value={item.abbreviation}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>

      <button onClick="saveEmployee()">Save</button>

      <Link to="/employee-list">View Current Employees</Link>
    </div>
  );
};

export default FormulaireEmployee;
