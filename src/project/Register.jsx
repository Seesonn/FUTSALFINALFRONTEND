// import React from 'react'
// import { Link } from 'react-router-dom'
// import Soo from '../assets/messi.png'
// import lbg from '../assets/ful.jpg'

// export default function Register() {
//   return (
//     <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img
//           src={lbg}
//           alt="Background"
//           className="w-full h-full object-cover opacity-90"
//         />
//       </div>

//       {/* Blur Overlay */}
//       <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

//       {/* Content */}
//       <div className="w-full max-w-4xl bg-green-200 bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg z-20 m-4">
//         <div className="w-full md:w-1/2 p-8">
//           <h1 className="text-4xl font-bold mb-6 text-center text-[#D2D81D] ">Sign Up</h1>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full p-3 bg-[#ebf8ff] rounded-md"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 bg-[#ebf8ff] rounded-md"
//             />
//             <input
//               type="password"
//               placeholder="Create Password"
//               className="w-full p-3 bg-[#ebf8ff] rounded-md"
//             />
//             <input
//               type="tel"
//               placeholder="Number"
//               className="w-full p-3 bg-[#ebf8ff] rounded-md"
//             />
//             <input
//               type="text"
//               placeholder="Address"
//               className="w-full p-3 bg-[#ebf8ff] rounded-md"
//             />
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 id="terms"
//                 className="mr-2"
//               />
//               <label htmlFor="terms" className="text-sm text-white">
//                 I agree to the{' '}
//                 <a href="#" className=" text-[#D2D81D] hover:underline">
//                   terms and conditions
//                 </a>
//               </label>
//             </div>
//             <Link to="/verify">
//               <button className="w-full p-3 bg-[#D2D81D] text-white font-bold rounded-md flex items-center justify-center ">
//                 SIGN UP
//               </button>
//             </Link>
//             <p className="mt-6 text-center text-sm text-white">
//               Already have an account?{' '}
//               <Link to="/login" className="text-[#D2D81D] hover:underline">
//                 Login
//               </Link>
//             </p>
//           </form>
//         </div>
//         <div className="w-full md:w-1/2 flex items-center justify-center p-8">
//           <img
//             src={Soo}
//             alt="goat with trophy"
//             className="max-w-full h-auto rounded-lg shadow-md hidden md:block"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

import React from "react";
import { Link } from "react-router-dom";
import Soo from "../assets/messi.png";
import lbg from "../assets/ful.jpg";

export default function Register() {
  return (
    <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={lbg}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="w-full max-w-4xl bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden flex flex-col md:flex-row shadow-lg z-20 m-4">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">
            Sign Up
          </h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="password"
              placeholder="Create Password"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="tel"
              placeholder="Number"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full p-3 bg-[#ebf8ff] rounded-md"
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-[#04163d] hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <Link to="/verify">
              <button className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center hover:bg-[#04153F]/90 transition-colors">
                SIGN UP
              </button>
            </Link>
            <p className="mt-6 text-center text-sm text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-white-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <img
            src={Soo}
            alt="goat with trophy"
            className="max-w-full h-auto rounded-lg shadow-md hidden md:block"
          />
        </div>
      </div>
    </div>
  );
}
