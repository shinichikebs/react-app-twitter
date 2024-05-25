import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./styles/WelcomeDashboard.css";
import logo from './image/logo.jpg';
import googleLogo from './image/google-logo.png';
import LoginForm from "./LoginForm";
import appleLogo from './image/apple.png';

const WelcomeDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  // const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="welcome-dashboard">
      <img src={logo} alt="Logo" className="logo" />
      <div className="welcome-content">
        <h1>Happening now</h1>
        <h2>Join today.</h2>
        
        <button className="join-button">
          <img src={googleLogo} alt="Google Logo" className="button-logo" />
          Sign Up with Google
        </button>
        <button className="create-account-button" onClick={handleLoginClick}>
          <img src={appleLogo} alt="apple Logo" className="button-a" />
          Sign Up with Apple
        </button>
        <p className="t-text">
        ──────────────  or  ───────────────
        </p>
        <p className="terms-text">
          By signing up, you agree to the Terms of service and  <br/>Privacy Policy,
          including Cookie Use.
        </p>
        <p className="account-text">Already have an account?</p>
        
        <button className="login-button" onClick={handleLoginClick}>
          Login
        </button>
      </div>
      <footer>
        <p>About</p>
        <p>Download the X app</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Ads info</p>
        <p>Blog</p>
        <p>Careers</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>X for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <br />
        <p>© 2024 X Corp.</p>
      </footer>
      <LoginForm show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default WelcomeDashboard;
