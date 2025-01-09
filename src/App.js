import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./frontend/HomePage";
import Gallery from "./frontend/Gallary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;