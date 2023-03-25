import "./App.css";
import { Routes, Route } from "react-router-dom";
// Start =======>  Client Import
import Detail from "./components/Detail/detail";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./Pages";
// End =======>  Client Import

// Start =======>  Admin Import
import AuthContextProvider from "./context/authContext";
import CrudContextProvider from "./DestinationData/context";
import Dashboard from "./Admin/components/Dashbord";
import Create from "./Admin/components/CreateBlogData";
import Update from "./Admin/components/UpdateBlogData";
import Feedback from "./Admin/components/Feedback";
// End =======> Admin Import

function App() {
  return (
    <>
      <CrudContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/detail" element={<Detail></Detail>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path="/update" element={<Update></Update>}></Route>
            <Route path="/feedback" element={<Feedback />}></Route>
          </Routes>
        </AuthContextProvider>
      </CrudContextProvider>
    </>
  );
}

export default App;
