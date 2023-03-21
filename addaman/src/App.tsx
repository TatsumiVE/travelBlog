
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Detail from "./components/Detail/detail";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Pages";
import AuthContextProvider from "./context/authContext";

function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/detail" element={<Detail></Detail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>      
      </Routes>    
    </AuthContextProvider>
    </>

  );
 }

export default App;
