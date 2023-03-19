import React, { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Detail from "./components/Detail/detail";
import Login from "./components/Login";
import Register from "./components/Register";
import AdminPanel from "./Admin/components/AdminPanel";
import Home from "./Pages";
// import CrudContextProvider from "./DestinationData";

function App() {
  return (
    <Routes>
      {/* Client Router */}
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/detail" element={<Detail></Detail>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/adminpanel" element={<AdminPanel></AdminPanel>}></Route>
    </Routes>
  );
}

export default App;
