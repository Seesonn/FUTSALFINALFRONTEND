import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from 'lucide-react'
import contactbg from '../assets/ful.jpg'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here we would typically handle form submission
    // For now, we'll just log to the console
    console.log('Form submitted')
  }

  return (
    <div className="container mx-auto bg-green-100/90  py-24">
      <div className="relative rounded-lg overflow-hidden mt-16">
        <img
          src={contactbg}
          alt="Futsal players on a court"
          className="object-cover w-full h-full absolute inset-0"
        />
        
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        
        <div className="relative z-10 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="text-white space-y-8">
              <div>
                <span className="text-sm font-medium bg-white/10 px-4 py-1 rounded-full">
                  Connect
                </span>
                <h1 className="text-5xl font-bold mt-4">Get in Touch</h1>
                <p className="mt-4 text-lg">We'd love to hear from you!</p>
              </div>

              <nav aria-label="Social media links">
                <ul className="flex flex-wrap gap-4">
                  {[
                    { name: 'Instagram', icon: Instagram, href: '#' },
                    { name: 'Facebook', icon: Facebook, href: '#' },
                    { name: 'LinkedIn', icon: Linkedin, href: '#' },
                    { name: 'Twitter', icon: Twitter, href: '#' },
                  ].map((social) => (
                    <li key={social.name}>
                      <a 
                        href={social.href}
                        className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors inline-block"
                        aria-label={social.name}
                      >
                        <social.icon className="w-6 h-6" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <address className="not-italic space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>+977 987653454</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" aria-hidden="true" />
                  <a href="mailto:booking@futsalcenter.com" className="hover:underline">
                    booking@futsalcenter.com
                  </a>
                </div>
               
              </address>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6  space-y-2">
              <div className="space-y-2">
                <label htmlFor="bookingInfo" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="bookingInfo"
                  name="bookingInfo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F]"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F]"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04153F] min-h-[150px]"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-[#04153F] hover:bg-[#04153F]/90 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

