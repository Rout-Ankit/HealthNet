import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(`Signed up as ${role}`);
    navigate('/dashboard');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Sign up</h1>
        <form onSubmit={handleSignup}>
          <label>
            Sign up as:
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <p>Already have an account? <a href="/">Login</a></p>
      </div>
    </div>
  );
}

export default Signup;
