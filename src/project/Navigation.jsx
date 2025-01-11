// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import logooo from "../assets/logo.png";

// const Navigation = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setIsNavOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-[#04153F] py-4">
//       <div className="logo w-[100px] ml-2 z-20">
//         <img src={logooo} alt="Logo" width={120} height={40} />
//       </div>
//       <nav
//         className={`
//           fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto
//           flex flex-col md:flex-row gap-8 items-center
//           bg-[#1c234b] md:bg-transparent p-8 md:p-0
//           shadow-lg md:shadow-none
//           transition-all duration-300 ease-in-out z-30
//           ${isNavOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
//         `}
//       >
//         <Link to="/" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">HOME</Link>
//         <Link to="/about" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">ABOUT</Link>
//         <Link to="/futsal-venues" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">FUTSAL</Link>
//         <Link to="/contact" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">CONTACT</Link>
//         <Link to="/login">
//           <button className="bg-[#A8BA0A] text-[#04153F] px-4 py-2 rounded-lg font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-200 w-full md:w-auto">
//             SIGN IN
//           </button>
//         </Link>
//       </nav>
//       <button
//         className="md:hidden z-30 w-8 h-8 flex flex-col justify-center items-center mr-2"
//         onClick={toggleNav}
//         aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
//       >
//         <span className={`bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${isNavOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
//         <span className={`bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out my-1 ${isNavOpen ? 'opacity-0' : ''}`} />
//         <span className={`bg-white h-0.5 w-6 rounded-sm transition-all duration-300 ease-in-out ${isNavOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
//       </button>
//       {isNavOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300 ease-in-out"
//           onClick={toggleNav}
//           aria-hidden="true"
//         />
//       )}
//     </header>
//   );
// };

// export default Navigation;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu } from 'lucide-react';
import logooo from "../assets/logo.png";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#04153F] py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo w-[100px] z-20">
            <img src={logooo} alt="Logo" width={120} height={40} />
          </div>
          <div className="flex items-center">
            <div className="md:hidden flex space-x-2 mr-4">
              <Link to="/login">
                <button className="bg-[#A8BA0A] text-[#04153F] px-2 py-1 rounded text-xs font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-200">
                  User Login
                </button>
              </Link>
              <Link to="/login">
                <button className="bg-[#A8BA0A] text-[#04153F] px-2 py-1 rounded text-xs font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-200">
                 Owner Login
                </button>
              </Link>
            </div>
            <button
              className="md:hidden z-30 w-8 h-8 flex items-center justify-center"
              onClick={toggleNav}
              aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
            >
              <Menu className="text-white w-6 h-6" />
            </button>
          </div>
          <nav
            className={`
              fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto
              flex flex-col md:flex-row md:items-center
              bg-[#1c234b] md:bg-transparent p-8 md:p-0
              shadow-lg md:shadow-none
              transition-all duration-300 ease-in-out z-30
              ${isNavOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            `}
          >
            <button
              className="md:hidden absolute top-4 right-4 text-white"
              onClick={toggleNav}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mt-12 md:mt-0 flex flex-col md:flex-row md:items-center gap-4 md:gap-2">
              <Link to="/" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">HOME</Link>
              <Link to="/about" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">ABOUT</Link>
              <Link to="/futsal-venues" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">FUTSAL</Link>
              <Link to="/contact" className="hover:text-[#40fe90] py-3 px-3 w-full md:w-auto text-white transition-colors duration-200">CONTACT</Link>
              <div className="hidden md:flex space-x-2">
                <Link to="/login">
                  <button className="bg-[#A8BA0A] text-[#04153F] px-3 py-1 rounded text-xs font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-200">
                   User Login
                  </button>
                </Link>
                <Link to="/login">
                  <button className="bg-[#A8BA0A] text-[#04153F] px-3 py-1 rounded text-xs font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-200">
                  Owner Login
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity duration-300 ease-in-out"
          onClick={toggleNav}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navigation;

