import React, { useState } from "react";
import "./Dashboard.css"; // Ensure this CSS file includes background image styles
import { Link } from "react-router-dom";
import HeathnetLogo from "../images/healthnet.png";
import robologo from "../images/robologo.jpg"; // Adjust the path as needed
import periodIcon from "../images/periodIcon.jpg"; // Replace with actual paths
import AcneIcon from "../images/acneIcon.jpg"; // Replace with actual paths
import AllergyIcon from "../images/allergy.png"; // Replace with actual paths
import coldIcon from "../images/coldIcon.jpg"; // Replace with actual paths
import childIcon from "../images/childIcon.png"; // Replace with actual paths
import depressionIcon from "../images/depressionIcon.jpg"; // Replace with actual paths

import BookAnAppointment from "./BookAnAppointment";
import FindDoctor from "./FindDoctor";

function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    "Book an appointment",
    "24x7 ambulance",
  ]);
  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img src={HeathnetLogo} alt="HealthNet" className="logo" />
        </div>

        {/* Search Bar */}
        <div className="header-search">
          <input
            type="text"
            placeholder="Search for disease and symptoms"
            className="search-bar"
          />
        </div>

        <nav>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
            <li>
              <Link to="/find-doctor">Find A Doctor</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin-login">Admin Login</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="dashboard-content">
        <div className="grid">
          <div>
            <BookAnAppointment />
          </div>

          <div>
            <FindDoctor/>
          </div>
          
          {/* <div className="grid-item">FIND A DOCTOR</div> */}
          <div className="grid-item">EMERGENCY</div>
          <div className="grid-item">PATIENT'S PORTAL</div>
        </div>

        {/* New Section with Consult Now Buttons */}
        <div className="consult-section">
          <div className="consult-now-item">
            <img src={periodIcon} alt="Period doubts or Pregnancy" />
            <h4>Period doubts or Pregnancy</h4>
            <Link to="/consult/period">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
          <div className="consult-now-item">
            <img src={AcneIcon} alt="Acne, pimple or skin issues" />
            <h4>Acne, pimple or skin issues</h4>
            <Link to="/consult/acne">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
          <div className="consult-now-item">
            <img src={AllergyIcon} alt="Allergy or Irritation" />
            <h4>Allergy or Irritation</h4>
            <Link to="/consult/performance">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
          <div className="consult-now-item">
            <img src={coldIcon} alt="Cold, cough or fever" />
            <h4>Cold, cough or fever</h4>
            <Link to="/consult/cold">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
          <div className="consult-now-item">
            <img src={childIcon} alt="Child not feeling well" />
            <h4>Child not feeling well</h4>
            <Link to="/consult/child">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
          <div className="consult-now-item">
            <img src={depressionIcon} alt="Depression or anxiety" />
            <h4>Depression or anxiety</h4>
            <Link to="/consult/depression">
              <button className="consult-button">CONSULT NOW</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Chatbox Button and Popup */}
      <div className="chatbox-container">
        <button
          className="chatbox-toggle"
          onClick={toggleChat}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={robologo} alt="AI Chatbot" className="chatbox-logo" />
          {isHovered && (
            <div className="chatbox-hover-popup">How can I help you?</div>
          )}
        </button>
        {isChatOpen && (
          <div className="chatbox">
            <div className="chatbox-header">
              <h3>HealthNet AI Assistant</h3>
              <button className="chatbox-close" onClick={toggleChat}>
                X
              </button>
            </div>
            <div className="chatbox-body">
              {/* Display automated and user messages */}
              {messages.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
            <div className="chatbox-footer">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
