
import { useState } from "react";
import full from "../assets/ful.jpg";
import Navigation from "./Navigation";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
    }, 2000);
  };

  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <Navigation />
    <div
      className="min-h-screen flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url(${full})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative z-10">
        <div className="relative">
          {/* Content */}
          <div className="lg:grid lg:grid-cols-2">
            {/* Left Section - Contact Info */}
            <div className="p-8 bg-[#04153F] text-white lg:p-12">
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-white/10 text-sm font-semibold px-4 py-1 rounded-full">
                    Connect With Us
                  </span>
                  <h1 className="mt-6 text-4xl font-bold sm:text-5xl">Get in Touch</h1>
                  <p className="mt-4 text-lg text-white/80">
                    We'd love to hear from you! Reach out for inquiries, bookings, or just to say hello.
                  </p>
                </div>

                {/* Social Media Links */}
                <nav aria-label="Social media links">
                  <ul className="flex space-x-4">
                    {[
                      { name: "Instagram", icon: Instagram, href: "#" },
                      { name: "Facebook", icon: Facebook, href: "#" },
                      { name: "LinkedIn", icon: Linkedin, href: "#" },
                      { name: "Twitter", icon: Twitter, href: "#" },
                    ].map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 ease-in-out"
                          aria-label={social.name}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Details */}
                <address className="not-italic space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white/80" />
                    <span>+977 987653454</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white/80" />
                    <a
                      href="mailto:booking@futsalcenter.com"
                      className="hover:underline hover:text-white transition-all duration-300"
                    >
                      booking@futsalcenter.com
                    </a>
                  </div>
                </address>
              </div>
            </div>

            {/* Right Section - Contact Form */}
            <div className="p-8 bg-white lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#04153F] focus:border-[#04153F] transition-all duration-300`}
                    required
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#04153F] focus:border-[#04153F] transition-all duration-300`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-4 py-2 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#04153F] focus:border-[#04153F] transition-all duration-300`}
                    required
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#04153F] text-white px-4 py-2 rounded-md hover:bg-[#04153F]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04153F] transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isSubmitted && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
    <div className="bg-white p-5 rounded-lg shadow-lg text-center w-full max-w-xs sm:max-w-sm mx-auto">
      <img
        src="https://cdn-icons-png.flaticon.com/512/53/53283.png"
        alt="Football"
        className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 animate-bounce"
      />
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">Thank You!</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5">
        Your message has been successfully submitted.
      </p>
      <button
        onClick={closePopup}
        className="bg-[#04153F] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-md text-sm sm:text-base hover:bg-[#04153F]/90 transition-colors duration-200"
      >
        Back
      </button>
    </div>
  </div>
)}</div>
    </div>
  );
};

export default Contact;

// import React from "react";
// import {
//   Facebook,
//   Instagram,
//   Linkedin,
//   Twitter,
//   Phone,
//   Mail,
// } from "lucide-react";
// import contactbg from "../assets/ful.jpg";

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here we would typically handle form submission
//     // For now, we'll just log to the console
//     console.log("Form submitted");
//   };

//   return (
//     <div className="container mx-auto bg-green-100/90  py-24">
//       <div className="relative rounded-lg overflow-hidden mt-16">
//         <img
//           src={contactbg}
//           alt="Futsal players on a court"
//           className="object-cover w-full h-full absolute inset-0"
//         />

//         <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

//         <div className="relative z-10 p-8">
//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             <div className="text-white space-y-8">
//               <div>
//                 <span className="text-sm font-medium bg-white/10 px-4 py-1 rounded-full">
//                   Connect
//                 </span>
//                 <h1 className="text-5xl font-bold mt-4">Get in Touch</h1>
//                 <p className="mt-4 text-lg">We'd love to hear from you!</p>
//               </div>

//               <nav aria-label="Social media links">
//                 <ul className="flex flex-wrap gap-4">
//                   {[
//                     { name: "Instagram", icon: Instagram, href: "#" },
//                     { name: "Facebook", icon: Facebook, href: "#" },
//                     { name: "LinkedIn", icon: Linkedin, href: "#" },
//                     { name: "Twitter", icon: Twitter, href: "#" },
//                   ].map((social) => (
//                     <li key={social.name}>
//                       <a
//                         href={social.href}
//                         className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors inline-block"
//                         aria-label={social.name}
//                       >
//                         <social.icon className="w-6 h-6" aria-hidden="true" />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </nav>

//               <address className="not-italic space-y-4">
//                 <div className="flex items-center gap-3">
//                   <Phone className="w-5 h-5" aria-hidden="true" />
//                   <span>+977 987653454</span>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Mail className="w-5 h-5" aria-hidden="true" />
//                   <a
//                     href="mailto:booking@futsalcenter.com"
//                     className="hover:underline"
//                   >
//                     booking@futsalcenter.com
//                   </a>
//                 </div>
//               </address>
//             </div>

//             <form
//               onSubmit={handleSubmit}
//               className="bg-white rounded-lg p-6  space-y-2"
//             >
//               <div className="space-y-2">
//                 <label
//                   htmlFor="bookingInfo"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="bookingInfo"
//                   name="bookingInfo"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F]"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F]"
//                   required
//                 />
//               </div>
//               <div className="space-y-2">
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F] min-h-[150px]"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-[#04153F] hover:bg-[#04153F]/90 text-white font-semibold py-2 px-4 rounded-md transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
