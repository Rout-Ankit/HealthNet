import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Benefits from "../src/components/Benefits";
import Footer from "./components/Footer";
// import BookAnAppointment from "./components/BookAnAppointment";

function App() {
  return (
    <Router>
      <>
        <div className="main">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/Benefits" element={<Benefits />} /> */}
          </Routes>
        </div>
        <Benefits/>
        <Footer />
      </>
    </Router>
  );
}

export default App;
