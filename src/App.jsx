import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Result } from "./Result";
function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}>
      </Route>
      <Route path="/result" element={<Result></Result>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
