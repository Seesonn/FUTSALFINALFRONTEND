import { motion } from "framer-motion";
import { FaFutbol } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#04153F] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-6xl font-extrabold text-white tracking-tight sm:text-7xl flex items-center justify-center">
            4
            <motion.div
              className="inline-block mx-2"
              animate={{
                y: [0, -20, 0],
               
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaFutbol className="text-yellow-600 h-16 w-16" />
            </motion.div>
            4
          </h1>
          <p className="mt-4 text-3xl font-bold text-white">
            Page Out of Bounds
          </p>
          <p className="mt-2 text-xl text-blue-100">
            Oops! This page has been kicked into the stands.
          </p>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-[#04153F] bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-150 ease-in-out shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Back to Home Field
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
