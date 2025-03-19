import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Sign up";
import Pnrstatus from "./components/Auth/Pnrstatus";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className=" m-4">
          <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/login" element={ <Login />}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/pnrstatus" element={<Pnrstatus/>}/>
            
            

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
