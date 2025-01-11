import { Link } from 'react-router-dom'
import abouthero from'../assets/at.jpg';
import aboutdes from'../assets/abb.jpg';
export default function About() {
  return (
    
    <div className="min-h-screen py-24  bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900">
        <img
          src={abouthero}
          alt="Futsal players in action"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          
          <h1 className="mb-6 max-w-4xl text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
         Futsal Booking System
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl text-gray-200 font-medium">
        Be Ready to Play – Book Your Victory!
        </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <section className="mb-24">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
    <div className="grid md:grid-cols-2">
      <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">About Us</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We make it easy to browse and book futsal courts online, saving you time and hassle. Whether you're scheduling a friendly match or organizing a tournament, we've got you covered!
        </p>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Join us to simplify futsal bookings. Connect with players, book courts effortlessly, and become part of an active futsal community.
        </p>
        <Link to="/register" className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#04153F] hover:bg-[#04153F]/90">
  Join Our Community
</Link>

      </div>
      <div className="relative h-64 md:h-auto">
        <img
          src={aboutdes}
          alt="Futsal community"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</section>
        {/* Key Features */}
        <section className="mb-24">
  <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Why Us</h2>
  <div className="grid md:grid-cols-3 gap-8">
    {[
      { 
        title: "Easy Booking Process", 
        description: "Book your preferred futsal court with just a few clicks, anytime and anywhere.",
        icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      },
      { 
        title: "Wide Range of Courts", 
        description: "Access a diverse selection of futsal courts across various locations to suit your needs.",
        icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      },
      { 
        title: "Real-time Availability", 
        description: "Check court availability in real-time and secure your slot instantly.",
        icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      },
    ].map((feature, index) => (
      <div key={index} className="bg-white rounded-xl shadow-lg p-8 transition duration-300 hover:shadow-xl border border-gray-100">
        <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
      </div>
    ))}
      </div>
   </section>

        <section className="bg-[#04153F] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Futsal Like Never Before?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">Join our community of futsal enthusiasts and start booking courts today!</p>
          <Link to="/register" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-blue-600 bg-white hover:bg-blue-50 transition duration-300">
            Get Started Now
          </Link>
        </section>
      </div>
    </div>
  )
}