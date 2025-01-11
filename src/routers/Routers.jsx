import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../project/Home';
import About from '../project/About';
import Contact from '../project/Contact';
import Login from "../project/Login";
import Register from "../project/Register";
import AdminLogin from "../project/AdminLogin";
import VerificationCode from "../project/VerificationCode";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/futsal" element={<Futsal />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/verificationcode" element={<VerificationCode />} />
        </Routes>
    );
};
