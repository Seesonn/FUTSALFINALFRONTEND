


import { Link } from "react-router-dom" 
import hero from "../assets/hero.png";
export default function Hero() {
  return (
    <section className="relative bg-[#04153F] text-white overflow-hidden py-24 md:py-24 lg:py-32">
      

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="content w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-[#A8BA0A]/20 rounded-full mb-4">
                <span className="text-xs font-medium text-[#A8BA0A]">NEPAL'S FIRST BOOKING WEBSITE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                ENHANCE YOUR
                <br />
                FUTSAL EXPERIENCE
                <br />
                <span className="text-[#A8BA0A]">WITH US</span>
              </h1>
            </div>

            <p className="text-base md:text-lg text-gray-300 max-w-md">
              Book your futsal sessions effortlessly, connect with players, and elevate your game with our premium
              facilities.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link to="/userlogin" className="group">
                <button className="bg-[#A8BA0A] text-[#04153F] px-8 py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 hover:bg-[#c6d92a] hover:shadow-lg hover:shadow-[#A8BA0A]/20">
                  JOIN NOW
                </button>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-[#A8BA0A] transition-colors duration-300 font-medium flex items-center gap-2"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={hero || "/placeholder.svg"}
              alt="Futsal player kicking ball"
              className="w-full h-auto rounded-lg"
            />
          </div>

           </div>
          
      </div>
    </section>
  )
}

