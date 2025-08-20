import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import { ToastContainer } from "react-toastify";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import AuthProtector from "./Screens/AuthProtector";
import HomeProtector from "./Screens/HomeProtector";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthProtector />}>
          <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<HomeProtector />}>
          <Route path="/home" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
