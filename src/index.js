import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from "react-router-dom";
import { 
  Generate, 
  History, 
  Home,  
  Setup
} from "./pages";
ReactDOM.render(
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/history" element={<History />} />
      </Routes>
  </Router>,

  document.getElementById("root")
);