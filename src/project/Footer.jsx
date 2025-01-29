import { Mail, User, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full backdrop-filter bg-[#04153F] backdrop-blur-lg ">
      <hr className="border-t border-gray-300 w-full shadow-lg" />
      <div className="  text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:space-x-12">
            <div className="w-full sm:w-1/3"></div> {/* Left gap */}
            {/* Any query */}
            <div className="w-full sm:w-1/4 space-y-4 mb-8 sm:mb-0">
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-xl md:text-2xl font-semibold">
                  <span className="text-white">Any</span>{" "}
                  <span className="text-[#D2D81D]">queries?</span>
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base">Send us email</p>
                <a
                  href="mailto:futsalbooking@gmail.com"
                  className="text-[#D2D81D] hover:underline text-sm md:text-base break-all"
                >
                  futsalbooking@gmail.com
                </a>
              </div>
            </div>
            {/* About */}
            <div className="w-full sm:w-1/4 space-y-4 mb-8 sm:mb-0">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">
                  About
                </h2>
              </div>
              <nav className="space-y-2 text-sm md:text-base">
                <a
                  href="#"
                  className="block hover:text-[#D2D81D] transition-colors duration-200"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="block text-[#D2D81D] hover:underline transition-colors duration-200"
                >
                  Book Now
                </a>
                <a
                  href="#"
                  className="block hover:text-[#D2D81D] transition-colors duration-200"
                >
                  Contacts
                </a>
                <a
                  href="#"
                  className="block text-[#D2D81D] hover:underline transition-colors duration-200"
                >
                  Futsals
                </a>
              </nav>
            </div>
            {/* Legal */}
            <div className="w-full sm:w-1/4 space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5 md:w-6 md:h-6" />
                <h2 className="text-[#D2D81D] text-xl md:text-2xl font-semibold">
                  Legal
                </h2>
              </div>
              <nav className="space-y-2 text-sm md:text-base">
                <a
                  href="#"
                  className="block hover:text-[#D2D81D] transition-colors duration-200"
                >
                  Terms and conditions
                </a>
                <a
                  href="#"
                  className="block text-[#D2D81D] hover:underline transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
            <div className="w-full sm:w-1/4"></div> {/* Right gap */}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 text-center font-semibold text-xs sm:text-sm">
          <p>© 2024 All Rights Reserved, futsalbooking@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
