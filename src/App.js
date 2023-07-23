import React from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import Home from "./pages/Home.jsx"
import GetService from "./pages/GetService.jsx"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getservice/:id" element={<GetService />} />
      </Routes>
      
  </div>
  );
}

export default App;
