import { useState, Suspense, lazy } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./page/Home"));
const EmployeeList = lazy(() => import("./page/EmployeeList"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
