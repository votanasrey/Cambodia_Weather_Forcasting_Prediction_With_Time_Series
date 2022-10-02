import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppRoute } from "./configs/constants";
import Home from "./routes/home/home";

function App() {
  return (
    <Router>
      <Home />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
