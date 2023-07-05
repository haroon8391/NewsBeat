import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import React from "react";
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(65, 61, 61)"
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }


  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} changeMode={changeMode} />
        <Routes>
          <Route path="/" element={<News category="general" mode={mode} />} />
          <Route path="/business" element={<News category="business" mode={mode} />} />
          <Route path="/health" element={<News category="health" mode={mode} />} />
          <Route path="/sports" element={<News category="sports" mode={mode} />} />
          <Route path="/technology" element={<News category="technology" mode={mode} />} />
          <Route path="/entertainment" element={<News category="entertainment" mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
