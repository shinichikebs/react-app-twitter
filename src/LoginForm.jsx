// // LoginForm.jsx

// import React, { useState } from "react";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Hardcoded email and password for demonstration purposes
//     const hardcodedEmail = "gwapo@gmail.com";
//     const hardcodedPassword = "123";

//     if (email === hardcodedEmail && password === hardcodedPassword) {
//       // Redirect to dashboard page
//       window.location.href = "/dashboard";
//     } else {
//       // Login failed, display error message
//       setError("Invalid email or password");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
// LoginForm.jsx



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';
import "./styles/LoginForm.css";
import logo from './image/logo.jpg';
import googleLogo from './image/google-logo.png';

const LoginForm = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const hardcodedEmails = ["gwapo@gmail.com", "hjelbert37@gmail.com"];

    if (hardcodedEmails.includes(email)) {
      setShowForm(true);
      setError("");
    } else {
      setShowForm(false);
      setError("Invalid email. Please try again.");
    }
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const hardcodedPassword = "123";

    if (password === hardcodedPassword) {
      navigate("/dashboard");
    } else {
      setError("Invalid password. Please try again.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="close-mb">
        <p className="close-m">X</p>
        <Modal.Title className="tittle">Sign in to X</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center mb-4">
          <img src={logo} alt="Logo" className="logo-mb-3" />
          {error && <p className="error-message">{error}</p>}
        </div>
        {!showForm ? (
          <Form onSubmit={handleSubmitEmail}>
            <button className="button-top-left">
          <img src={googleLogo} alt="Google Logo" className="button-l" />
          Sign Up with Google
        </button>
            <Button type="button" className="button-top-right">Create Account</Button>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="en-3"></Form.Label>
              <Form.Control
                type="email"
                value={email}
                className="en-3"
                onChange={handleEmailChange}
                required
                placeholder="Email"
              />
            </Form.Group>
            <Button type="submit" className="w-100-mb-3">Next</Button>
            <p className="text-center">Forgot Password?</p>
          </Form>
        ) : (
          <Form onSubmit={handleSubmitLogin}>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="en-3"></Form.Label>
              <Form.Control
                type="email"
                value={email}
                className="en-3"
                onChange={handleEmailChange}
                required
                disabled
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Label className="md-3"></Form.Label>
              <Form.Control
                type="password"
                value={password}
                className="md-3"
                onChange={handlePasswordChange}
                required
                placeholder="Password"
              />
            </Form.Group>
            <Button type="submit" className="md-4">Login</Button>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        {showForm && <p className="w-100">Forgot Password?</p>}
      </Modal.Footer>
    </Modal>
  );
};

export default LoginForm;
