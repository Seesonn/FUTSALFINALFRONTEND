import React from 'react';

export default function AdminLogin() {
   

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#04153F]  p-4">
            <div className="w-full max-w-lg sm:max-w-md bg-green-100 bg-opacity-70 backdrop-blur-lg  rounded-lg shadow-lg p-8">
                <div className="flex flex-col items-center mb-6">
                    <svg
                        className="w-12 h-12 text-[#04153F]  mb-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-label="Admin icon"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <p className="text-[#04153F]  text-2xl sm:text-3xl font-bold">Admin</p>
                </div>
                <form className="flex flex-col gap-6" >
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-3 border rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border rounded-md bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-md bg-[#04153F]  text-white font-semibold focus:outline-none focus:ring-2 focus:ring-green-700"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
