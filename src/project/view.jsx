// import { Clock } from 'lucide-react'

// import Im from "../assets/hero.png";
// import Im1 from '../assets/w1.jpg';
// import Im2 from '../assets/w2.jpg';
// import Im3 from '../assets/w3.jpg';
// import Im4 from '../assets/w4.jpg';

// export default function View() {
//   return (
//     <div className="container mx-auto px-4 py-24 max-w-6xl">

//       <section className="mb-12">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2">
//             <img
//               src={Im3}
//               alt="Coaches and players"
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl font-bold mb-4">About Us</h2>
//             <p className="text-lg mb-4">
//               Welcome to SD Futsal in Itahari! We provide top-notch futsal facilities and a hassle-free online booking service, making it easy for you to book your game anytime. Whether you're a casual player or a serious competitor, we're here to offer you the best futsal experience in town. Book online and enjoy the game with ease!
//             </p>
//             <p className="text-lg">
//               Come visit us in Itahari and experience the excitement of futsal at its best!
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className="mb-12 bg-gray-900 text-white p-8 rounded-lg">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2">
//             <h2 className="text-3xl font-bold mb-4 text-yellow-400">FEATURE & CONDITION</h2>
//             <p className="text-lg mb-6 text-gray-400">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
//               dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
//               ea commodo consequat.
//             </p>
//             <div className="flex items-center text-gray-400">
//               <Clock className="mr-2" size={20} />
//               <span>OPEN at 06:00AM - 11:00PM | RS. 1000/HOUR</span>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2">
//             <img
//               src={Im}
//               alt="Indoor soccer field"
//               className="rounded-lg shadow-lg w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       <section className="mb-12">
//         <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {[Im1, Im2, Im3, Im4].map((src, i) => (
//             <img
//               key={i}
//               src={src}
//               alt={`Gallery Image ${i + 1}`}
//               className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl w-full h-auto"
//             />
//           ))}
//         </div>
//       </section>
//     </div>
//   )
// }

import { Clock } from "lucide-react";

import Im from "../assets/hero.png";
import Im1 from "../assets/w1.jpg";
import Im2 from "../assets/w2.jpg";
import Im3 from "../assets/w3.jpg";
import Im4 from "../assets/w4.jpg";

export default function View() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-6xl">
      <section className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={Im3}
              alt="Coaches and players"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-4">
              Welcome to SD Futsal in Itahari! We provide top-notch futsal
              facilities and a hassle-free online booking service, making it
              easy for you to book your game anytime. Whether you're a casual
              player or a serious competitor, we're here to offer you the best
              futsal experience in town. Book online and enjoy the game with
              ease!
            </p>
            <p className="text-lg">
              Come visit us in Itahari and experience the excitement of futsal
              at its best!
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 bg-gray-900 text-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">
              FEATURE & CONDITION
            </h2>
            <p className="text-lg mb-6 text-gray-400">
              Our futsal court is designed to offer the best playing experience.
              Here are some of the features and conditions: - Court Size: 25m x
              16m - Open Hours: 06:00 AM - 11:00 PM - Price: RS. 1000/hour
            </p>
            <div className="flex items-center text-gray-400">
              <Clock className="mr-2" size={20} />
              <span>OPEN at 06:00AM - 11:00PM | RS. 1000/HOUR</span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-yellow-400">
                Contact Us
              </h3>
              <p className="text-lg text-gray-400">
                Email: sdfutsal@example.com
              </p>
              <p className="text-lg text-gray-400">Mobile: +977-9812345678</p>
              <p className="text-lg text-gray-400">Location: Itahari, Nepal</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={Im}
              alt="Indoor soccer field"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[Im1, Im2, Im3, Im4].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery Image ${i + 1}`}
              className="rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl w-full h-auto"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
