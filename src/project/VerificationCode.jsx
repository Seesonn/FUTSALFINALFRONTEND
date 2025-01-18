import React, { useState, useRef, useEffect } from "react";
import OtpInput from "./otp/OtpInput";
import VerifyButton from "./otp/VerifyButton";
import RequestAgainLink from "./otp/RequestAgainLink";
import bgImage from "../assets/ful.jpg";

export default function VerificationCode() {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeInput, setActiveInput] = useState(0);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Prevent non-numeric input

    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
      setActiveInput(index + 1);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1].focus();
        setActiveInput(index - 1);
      }
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleClick = (index) => {
    setActiveInput(index);
    inputRefs.current[index].focus();
  };

  const handleVerify = () => {
    const verificationCode = otp.join("");
    console.log("Verification code:", verificationCode);
    // our verification logic here
  };

  const handleRequestAgain = (e) => {
    e.preventDefault();
    console.log("Requesting new code");
    // our request logic here
  };

  return (
    <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="w-full max-w-sm bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-lg p-4 shadow-lg sm:p-6 z-20 m-4">
        <h1 className="mb-4 text-center text-2xl font-semibold text-white sm:text-3xl">
          Verify
        </h1>
        <p className="mb-4 text-center text-sm text-white sm:text-base">
          Your code was sent to you via email
        </p>

        <OtpInput
          otp={otp}
          inputRefs={inputRefs}
          activeInput={activeInput}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          handleClick={handleClick}
        />

        <VerifyButton handleVerify={handleVerify} />
        <RequestAgainLink handleRequestAgain={handleRequestAgain} />
      </div>
    </div>
  );
}
