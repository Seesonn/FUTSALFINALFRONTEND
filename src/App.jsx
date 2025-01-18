import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./project/Navigation";
import Home from "./project/HomePage";
import About from "./project/About";
import Contact from "./project/Contact";
import Footer from "./project/Footer";
import VerificationCode from "./project/VerificationCode";
import Login from "./project/Login";
//import Register from "./project/Register";
import FutsalCardPage from "./project/FutsalcardPage";
import BookingSlot from "./project/BookingSlots";
import ForgotPassword from "./project/ForgetPassword";
import CreatNewPassword from "./project/CreateNewPassword";
import Dashboard from "./project/Dashboard";
import OwnerDashboard from "./project/OwnerDashboard";
import Register from "./project/ownerRegister";
import NotFound from "./project/PaageNotFound";

import View from "./project/view";
import HomePage from "./project/HomePage";

function App() {
  return (
    <Router>
      <div className="">
        {/* bg-[#04153F] min-h-screen flex flex-col */}
        {/* <Navigation /> */}
        <main className="flex-grow">
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/futsal-venues" element={<FutsalCardPage/>} />
            <Route path="/booking" element={<BookingSlot />} />
            <Route path="/verify" element={<VerificationCode />} />
            <Route path="/forget" element={<ForgotPassword />} />
            <Route path="/create-new-password" element={<CreatNewPassword />} />
            <Route path="/view" element={<View />} />
            <Route path="/dashboard" element={<Dashboard />} />

          
          </Routes> */}
        </main>
        <NotFound />
        <Dashboard />
        <Register />
        <BookingSlot/>
        {/* <HomePage/> */}
      </div>
    </Router>
  );
}

export default App;
