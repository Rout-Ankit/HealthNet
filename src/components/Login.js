import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import logo from "../images/logo.png";
import healthnet from "../images/healthnet.png";

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Implement Google sign-in functionality here
    console.log("Google Sign In");
    // After successful Google sign-in, navigate to the dashboard
    navigate("/dashboard");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement your login logic here
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={healthnet} alt="HealthNet Logo" className="logo2" />
        <h1 color="black">Sign up</h1>
        <button className="google-button" onClick={handleGoogleSignIn}>
          <img src={logo} alt="Google Icon" className="logo" />
          Continue with Google
        </button>
        <p>or</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Username or Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <br></br>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>or</p>
        <Link to="/signup" className="guest-link">
          Continue as User or Admin
        </Link>
      </div>
    </div>
  );
}

export default Login;
