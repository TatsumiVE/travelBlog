import React, { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Detail from "./components/Detail/detail";
import Login from "./components/Login";
import Register from "./components/Register";

import Destination1 from "../assets/Singapore.png";
import Destination2 from "../assets/Thailand.png";
import Destination3 from "../assets/Paris.png";
import Destination4 from "../assets/Newzeland.png";
import Destination5 from "../assets/Bora Bora.png";
import Destination6 from "../assets/London.png";

import AdminPage from "./Admin/AdminPage";

import Home from "./Home";
import Page from "./Admin/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail:id" element={<Detail></Detail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <AdminPage />
    </>
  );
}

export default App;
