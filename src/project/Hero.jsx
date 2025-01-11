import React from 'react';
import hoo from "../assets/hero.png";
const Hero = () => {
  return (
    <main className=" mini-h-screen  py-24 flex flex-col md:flex-row items-center justify-between  px-4 md:px-8 lg:px-16  md:py-22 bg-[#04153F] text-white">
      <div className="content w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
          ENHANCE YOUR<br />FUTSAL EXPERIENCE<br />WITH US
        </h1>
        <p className="text-xs md:text-sm mb-6 md:mb-10 font-medium">
          NEPAL'S FIRST AUTOMATED BOOKING WEBSITE
        </p>
        <button className="bg-[#A8BA0A] text-[#04153F] px-6 py-3 rounded-lg font-semibold hover:bg-[#bbe000a0] hover:text-white transition-colors duration-300">
          JOIN NOW
        </button>
      </div>
      <div className="image-con w-full md:w-[1240px]  flex justify-center items-center">
        <img 
          src={hoo} 
          alt="Futsal player kicking ball" 
          className="w-full max-w-[1200px] h-auto object-contain animate-fadeIn" 
        />
      </div>
    </main>
  );
};

export default Hero;

