import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero'
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
function HomePage() {
  return (
    <div id="home" className="container mx-auto px-4 text-white bg-[#04153F] font-roboto">
      
      
      <Navigation />
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>

     
     
    </div>
  );
}

export default HomePage;

