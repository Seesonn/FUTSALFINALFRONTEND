// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import fgImage from "../assets/ful.jpg";
// export default function CreatNewPassword() {
//   return (
//     <div className="min-h-screen w-full font-roboto flex items-center justify-center relative overflow-hidden">

//       <div className="absolute inset-0 z-0">
//         <img
//           src={fgImage}
//           alt="Background"
//           className="w-full h-full object-cover opacity-90"
//         />
//       </div>

//       <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

//       {/* Content */}
//       <div className="w-full max-w-md bg-green-100 bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg z-20 m-4">
//         {/* Form Container */}
//         <div className="w-full p-8 flex flex-col justify-center">
//           <h1 className="text-4xl font-bold mb-6 text-center text-white">Creat New Password</h1>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <div className="relative">
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="New Password"
//                 className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
//                 required
//               />
//                <input
//                 type="password"
//                 value={ confirmpassword}

//                 placeholder="Retype Password"
//                 className="w-full p-3 bg-[#ebf8ff] border-none rounded-md"
//                 required
//               />
//             </div>
//             <Link to="/verify" className="w-full">
//               <button
//                 type="submit"
//                 className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#04153F]/90 transition-colors"
//               >
//                 Confrim Password
//               </button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/ful.jpg";

export default function CreateNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // Here we would typically call an API to update the password
    console.log("Password updated");
    navigate("/login"); // Redirect to login page after password reset
  };

  return (
    <div className="min-h-screen w-full font-sans flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover opacity-90"
        />
      </div>

      <div className="absolute inset-0 backdrop-blur-sm z-10"></div>

      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg z-20 m-4">
        <div className="w-full p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 text-center text-white">
            Create New Password
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="w-full p-3 bg-white border-none rounded-md"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Retype Password"
              className="w-full p-3 bg-white border-none rounded-md"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full p-3 bg-[#04153F] text-white rounded-md flex items-center justify-center cursor-pointer hover:bg-[#04153F]/90 transition-colors"
            >
              Confirm Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
