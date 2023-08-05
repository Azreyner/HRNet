import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// on importe le Provider
import { Provider } from "react-redux";
// on importe le store
import { store } from "./Redux/HrnetReducer.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
