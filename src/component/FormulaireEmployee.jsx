import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { states } from "../data.js";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { ajoutEmployee } from "../Redux/HrnetActions.js";
import "../style/component/formulaireEmployee.scss";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import moment from "moment/moment.js";

const FormulaireEmployee = () => {
  /*const [employee, setEmployee] = useState([
    {
      id: 1,
      name: "Joe",
      type: "admin",
    },
  ]);*/
  const [startDate, setStartDate] = useState(new Date());
  const [birthDate, setBirthDate] = useState(new Date());
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    birthDate: "",
    startDate: "",
    department: "",
    state: "",
  });
  const dispatch = useDispatch();

  const changementFirstname = (leFirstname) => {
    setEmployee((employee) => ({
      ...employee,
      firstName: leFirstname,
    }));
  };

  const changementLastname = (leLastname) => {
    setEmployee((employee) => ({
      ...employee,
      lastName: leLastname,
    }));
  };

  const changementStreet = (laStreet) => {
    setEmployee((employee) => ({
      ...employee,
      street: laStreet,
    }));
  };

  const changementCity = (laCity) => {
    setEmployee((employee) => ({
      ...employee,
      city: laCity,
    }));
  };

  const changementZipcode = (leZipcode) => {
    setEmployee((employee) => ({
      ...employee,
      zipCode: leZipcode,
    }));
  };

  const changementBirthDate = (date) => {
    setBirthDate(date);
    date = date.toLocaleDateString();
    setEmployee((employee) => ({
      ...employee,
      birthDate: date,
    }));
  };

  const changementStartDate = (date) => {
    setStartDate(date);
    date = date.toLocaleDateString();
    setEmployee((employee) => ({
      ...employee,
      startDate: date,
    }));
  };

  const changementDepartement = (leDep) => {
    setEmployee((employee) => ({
      ...employee,
      department: leDep,
    }));
  };

  const changementstate = (leState) => {
    setEmployee((employee) => ({
      ...employee,
      state: leState,
    }));
  };

  const saveEmployee = () => {
    dispatch(ajoutEmployee(employee));
  };

  const optionsDepartement = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const defaultOption = optionsDepartement[0];

  return (
    <div className="formulaire" id="formulaire">
      {/*<h2 className="formulaire__titre">Create Employee</h2>*/}
      <form action="#" className="formulaire__form" id="create-employee">
        <label htmlFor="first-name">First Name</label>
        <input
          className="formulaire__form--input"
          type="text"
          id="first-name"
          onChange={(e) => changementFirstname(e.target.value)}
        />

        <label htmlFor="last-name">Last Name</label>
        <input
          className="formulaire__form--input"
          type="text"
          id="last-name"
          onChange={(e) => changementLastname(e.target.value)}
        />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          selected={birthDate}
          onChange={changementBirthDate}
          dateFormat="yyyy-MM-dd"
          className="formulaire__form--input"
          showYearDropdown
        />

        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={changementStartDate}
          dateFormat="yyyy-MM-dd"
          className="formulaire__form--input"
          showYearDropdown
        />

        <fieldset className="formulaire__fieldset">
          <div className="formulaire__fieldset--legend">
            <legend>Address</legend>
            <div></div>
          </div>

          <label htmlFor="street">Street</label>
          <input
            className="formulaire__form--input"
            id="street"
            type="text"
            onChange={(e) => changementStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            className="formulaire__form--input"
            id="city"
            type="text"
            onChange={(e) => changementCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <select
            className="formulaire__form--select"
            name="state"
            id="state"
            onChange={(e) => changementstate(e.target.value)}
          >
            {states.map((item, index) => {
              return (
                <option key={index} value={item.abbreviation}>
                  {item.name}
                </option>
              );
            })}
          </select>

          <label htmlFor="zip-code">Zip Code</label>
          <input
            className="formulaire__form--input"
            id="zip-code"
            type="number"
            onChange={(e) => changementZipcode(e.target.value)}
          />
        </fieldset>

        <label htmlFor="department">Department</label>

        <Dropdown
          options={optionsDepartement}
          onChange={(e) => changementDepartement(e.value)}
          value={defaultOption}
        />
      </form>

      <button id="boutonSave" onClick={saveEmployee}>
        Save
      </button>

      <Link to="/employee-list">View Current Employees</Link>
    </div>
  );
};

export default FormulaireEmployee;
