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
import { ReactModal } from "@Azreyner/reactmodal";
import { createPortal } from "react-dom";

const FormulaireEmployee = () => {
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * Change la valeur du prénom de l'employé.
   * @param {string} leFirstname - Le nouveau prénom de l'employé.
   */
  const changementFirstname = (leFirstname) => {
    setEmployee((employee) => ({
      ...employee,
      firstName: leFirstname,
    }));
  };

  /**
   * Change la valeur du nom de famille de l'employé.
   * @param {string} leLastname - Le nouveau nom de famille de l'employé.
   */
  const changementLastname = (leLastname) => {
    setEmployee((employee) => ({
      ...employee,
      lastName: leLastname,
    }));
  };

  /**
   * Change la valeur de la rue de l'adresse de l'employé.
   * @param {string} laStreet - La nouvelle rue de l'adresse de l'employé.
   */
  const changementStreet = (laStreet) => {
    setEmployee((employee) => ({
      ...employee,
      street: laStreet,
    }));
  };

  /**
   * Change la valeur de la ville de l'adresse de l'employé.
   * @param {string} laCity - La nouvelle ville de l'adresse de l'employé.
   */
  const changementCity = (laCity) => {
    setEmployee((employee) => ({
      ...employee,
      city: laCity,
    }));
  };

  /**
   * Change la valeur du code postal de l'adresse de l'employé.
   * @param {string} leZipcode - Le nouveau code postal de l'adresse de l'employé.
   */
  const changementZipcode = (leZipcode) => {
    setEmployee((employee) => ({
      ...employee,
      zipCode: leZipcode,
    }));
  };

  /**
   * Change la date de naissance de l'employé.
   * @param {Date} date
   */
  const changementBirthDate = (date) => {
    setBirthDate(date);
    // fait passé la birthdate au format français jj/mm/aaaa
    date = date.toLocaleDateString();
    setEmployee((employee) => ({
      ...employee,
      birthDate: date,
    }));
  };

  /**
   * Change la date de début d'emploi de l'employé.
   * @param {Date} date
   */
  const changementStartDate = (date) => {
    setStartDate(date);
    // fait passé la startDate au format français jj/mm/aaaa
    date = date.toLocaleDateString();
    setEmployee((employee) => ({
      ...employee,
      startDate: date,
    }));
  };

  /**
   * Change le département de l'employé.
   * @param {string} leDep - Le nouveau département de l'employé.
   */
  const changementDepartement = (leDep) => {
    setEmployee((employee) => ({
      ...employee,
      department: leDep,
    }));
  };

  /**
   * Change l'état/région de l'employé.
   * @param {string} leState - Le nouvel état/région de l'employé.
   */
  const changementstate = (leState) => {
    setEmployee((employee) => ({
      ...employee,
      state: leState,
    }));
  };

  /**
   * Ici, après avoir appuyé sur le bouton save, dispatch va transmettre l'action souhaité au Reducer.
   * Aussi, on va déclencher l'affichage de la modale.
   */
  const saveEmployee = () => {
    dispatch(ajoutEmployee(employee));
    setIsModalOpen(true);
  };

  const optionsDepartement = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];
  const defaultOption = optionsDepartement[0];

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
      </div>
      {isModalOpen &&
        createPortal(
          <ReactModal
            contentModal="L'employé a été créé !"
            contentButton="Fermer"
            onClose={handleModalClose}
          />,
          document.body
        )}
    </>
  );
};

export default FormulaireEmployee;
