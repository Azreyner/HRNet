import React from "react";
import FormulaireEmployee from "../component/FormulaireEmployee";
import "../style/page/home.scss";

const Index = () => {
  return (
    <div>
      <div className="containerFormulaire">
        <div className="title">
          <h1>
            HR<span style={{ color: "#646CFF", fontSize: "64px" }}>.</span>Net
          </h1>
        </div>
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
