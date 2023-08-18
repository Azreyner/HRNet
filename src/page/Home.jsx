import React from "react";
import FormulaireEmployee from "../component/FormulaireEmployee";
import "../style/page/home.scss";
import Header from "../component/Header";

import { createPortal } from "react-dom";

const Index = () => {
  return (
    <div>
      <div className="containerFormulaire">
        {createPortal(<Header />, document.body)}
        <div className="container">
          <FormulaireEmployee />
        </div>
      </div>
      {/*<div id="confirmation" className="modal">
        Employee Created!
  </div>*/}
    </div>
  );
};

export default Index;
