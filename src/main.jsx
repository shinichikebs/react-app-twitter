// // main.jsx

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
// import LoginForm from "./LoginForm";
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <Routes> {/* Wrap Routes around Route */}
//         <Route exact path="/" element={<LoginForm />} /> {/* Use element prop */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
// main.jsx

// import React from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
// import LoginForm from "./LoginForm";
// import Dashboard from "./Dashboard"; // Import Dashboard component
// import "./index.css";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<LoginForm />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Add Route for Dashboard */}
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
// main.jsx
// main.jsx

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import WelcomeDashboard from "./WelcomeDashboard"; 
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<WelcomeDashboard />} />
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);
