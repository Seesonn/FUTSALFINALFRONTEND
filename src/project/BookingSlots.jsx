// import React, { useState, useEffect } from 'react';

// export default function BookingSlot() {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [bookings, setBookings] = useState({});
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const [activeSlot, setActiveSlot] = useState(null);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       const now = new Date();
//       if (now.getDate() !== currentDate.getDate()) {
//         setCurrentDate(now);
//         setSelectedDate(now);
//       }
//     }, 60000);

//     return () => clearInterval(timer);
//   }, [currentDate]);

//   const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const timeSlots = Array.from({ length: 18 }, (_, i) => {
//     const hour = (i + 6) % 24;
//     return `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
//   });

//   const getNextWeek = () => {
//     return Array.from({ length: 7 }, (_, i) => {
//       const date = new Date(currentDate);
//       date.setDate(currentDate.getDate() + i);
//       return date;
//     });
//   };

//   const handleDateClick = (date) => {
//     setSelectedDate(date);
//   };

//   const handleSlotClick = (slot) => {
//     const slotDate = new Date(selectedDate);
//     const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
//     slotDate.setHours(
//       period === 'PM' && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && period === 'AM' ? 0 : parseInt(hours),
//       parseInt(minutes)
//     );

//     const bookingKey = `${selectedDate.toDateString()}-${slot}`;
//     const isBooked = bookings[bookingKey];

//     if (isBooked) {
//       setPopupMessage('Do you want to unbook this slot?');
//     } else {
//       setPopupMessage('Do you want to book this slot?');
//     }
//     setShowPopup(true);
//     setActiveSlot(bookingKey);
//   };

//   const confirmBooking = () => {
//     if (activeSlot) {
//       setBookings((prev) => ({
//         ...prev,
//         [activeSlot]: !prev[activeSlot],
//       }));
//       setShowPopup(false);
//       setActiveSlot(null);
//     }
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//     setActiveSlot(null);
//   };

//   const getSlotStatus = (slot) => {
//     const slotDate = new Date(selectedDate);
//     const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
//     slotDate.setHours(
//       period === 'PM' && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && period === 'AM' ? 0 : parseInt(hours),
//       parseInt(minutes)
//     );

//     const now = new Date();
//     const bookingKey = `${selectedDate.toDateString()}-${slot}`;

//     if (slotDate < now) return 'unavailable';

//     if (bookings[bookingKey]) return 'booked';
//     return 'available';
//   };

//   return (
//     <div className=" bg-black bg-opacity-20 backdrop-blur-lg px-2 py-24 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden relative">
//       <header className="text-center mb-8">
//       <h1 className="text-[#04153F] text-4xl font-bold mb-8 text-center">Booking Schedule</h1>
//         <p className="text-black text-lg mt-4 ">Don't lose your chance, book now!</p>
//       </header>
//       <div className="flex justify-start mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#4CAF50] scrollbar-track-[#1a1a2e] py-2">
//         {getNextWeek().map((date) => (
//           <div
//             key={date.toDateString()}
//             className={`p-2 sm:p-3 rounded-lg text-center cursor-pointer min-w-[80px] max-w-[120px] mr-4 ${
//               date.toDateString() === selectedDate.toDateString()
//                 ? 'bg-green-100 text-black'
//                 : 'bg-white text-black'
//             } transition-transform`}
//             onClick={() => handleDateClick(date)}
//             style={{ flex: 1, minWidth: '80px', maxWidth: '120px' }}
//           >
//             <div className="text-xs sm:text-sm uppercase truncate">{days[date.getDay()]}</div>
//             <div className="text-lg font-bold border border-gray-300 p-1 mt-2 rounded-md shadow-md truncate">{date.getDate()}</div>
//           </div>
//         ))}
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
//         {timeSlots.map((slot) => {
//           const status = getSlotStatus(slot);
//           return (
//             <div
//               key={slot}
//               className={`p-2 sm:p-3 rounded-lg text-center font-semibold text-xs sm:text-sm min-h-[50px] flex flex-col justify-center ${
//                 status === 'available'
//                   ? 'bg-white text-black cursor-pointer'
//                   : status === 'booked'
//                   ? 'bg-[#ffd700] text-[#1a1a2e]'
//                   : 'bg-[#cccccc] text-gray-600 cursor-not-allowed'
//               } transition-transform`}
//               onClick={() => status !== 'unavailable' && handleSlotClick(slot)}
//             >
//               <div className="font-bold mb-1">{slot}</div>
//               <div className="text-xs">{status}</div>
//             </div>
//           );
//         })}
//       </div>
//       {showPopup && (
//         <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-200 p-6 rounded-lg text-center z-50 shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
//           <p className="text-lg mb-4">{popupMessage}</p>
//           <div>
//             <button
//               className="bg-[#4CAF50] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#45a049] focus:outline-none focus:ring focus:ring-[#45a049]"
//               onClick={confirmBooking}
//             >
//               Confirm
//             </button>
//             <button
//               className="bg-[#ff4d4d] text-white py-2 px-4 rounded-md shadow-md ml-2 hover:bg-[#e60000] focus:outline-none focus:ring focus:ring-[#e60000]"
//               onClick={closePopup}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

const formatShortDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`;
};

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const isBefore = (date1, date2) => {
  return date1 < date2;
};

const isAfter = (date1, date2) => {
  return date1 > date2;
};

export default function BookingSlot() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState({});
  const [selectedSlots, setSelectedSlots] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showUnbookConfirmation, setShowUnbookConfirmation] = useState(false);
  const [unbookingSlot, setUnbookingSlot] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentDate.getDate()) {
        setCurrentDate(now);
        setSelectedDate(now);
      }
    }, 60000);

    return () => clearInterval(timer);
  }, [currentDate]);

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const timeSlots = Array.from({ length: 18 }, (_, i) => {
    const hour = (i + 6) % 24;
    return `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:00 ${
      hour < 12 ? "AM" : "PM"
    }`;
  });

  const getNextWeek = () => {
    return Array.from({ length: 7 }, (_, i) => addDays(currentDate, i));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSlotClick = (slot, date) => {
    const slotDate = new Date(date);
    const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
    slotDate.setHours(
      period === "PM" && hours !== "12"
        ? parseInt(hours) + 12
        : hours === "12" && period === "AM"
        ? 0
        : parseInt(hours),
      parseInt(minutes)
    );

    const bookingKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${slot}`;

    if (isBefore(slotDate, new Date())) {
      setAlertMessage({
        type: "error",
        title: "Selection Error",
        description: "Cannot select slots in the past.",
      });
      return;
    }

    if (bookings[bookingKey]) {
      setUnbookingSlot(bookingKey);
      setShowUnbookConfirmation(true);
    } else {
      setSelectedSlots((prev) => {
        if (prev.includes(bookingKey)) {
          return prev.filter((s) => s !== bookingKey);
        } else {
          return [...prev, bookingKey];
        }
      });
    }
  };

  const proceedToBook = () => {
    if (selectedSlots.length === 0) {
      setAlertMessage({
        type: "error",
        title: "Booking Error",
        description: "Please select at least one slot to book.",
      });
      return;
    }
    setShowConfirmation(true);
  };

  const confirmBooking = () => {
    setBookings((prev) => {
      const newBookings = { ...prev };
      selectedSlots.forEach((slot) => {
        newBookings[slot] = true;
      });
      return newBookings;
    });
    setAlertMessage({
      type: "success",
      title: "Booking Confirmed",
      description: `Successfully booked ${selectedSlots.length} slot(s).`,
    });
    setSelectedSlots([]);
    setShowConfirmation(false);
  };

  const cancelBooking = () => {
    setShowConfirmation(false);
  };

  const confirmUnbooking = () => {
    if (unbookingSlot) {
      setBookings((prev) => {
        const newBookings = { ...prev };
        delete newBookings[unbookingSlot];
        return newBookings;
      });
      setAlertMessage({
        type: "success",
        title: "Unbooking Confirmed",
        description: "Successfully unbooked the slot.",
      });
    }
    setUnbookingSlot(null);
    setShowUnbookConfirmation(false);
  };

  const cancelUnbooking = () => {
    setUnbookingSlot(null);
    setShowUnbookConfirmation(false);
  };

  const getSlotStatus = (slot, date) => {
    const slotDate = new Date(date);
    const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
    slotDate.setHours(
      period === "PM" && hours !== "12"
        ? parseInt(hours) + 12
        : hours === "12" && period === "AM"
        ? 0
        : parseInt(hours),
      parseInt(minutes)
    );

    const now = new Date();
    const bookingKey = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}-${slot}`;

    if (isBefore(slotDate, now)) return "unavailable";
    if (bookings[bookingKey]) return "booked";
    if (selectedSlots.includes(bookingKey)) return "selected";
    return "available";
  };

  return (
    <div className="bg-black bg-opacity-20 backdrop-blur-lg px-2 py-24 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden relative">
      <header className="text-center mb-8">
        <h1 className="text-[#04153F] text-4xl font-bold mb-8 text-center">
          Booking Schedule
        </h1>
        <p className="text-black text-lg mt-4">
          Don't lose your chance, book now!
        </p>
      </header>
      {alertMessage && (
        <div
          className={`mb-4 p-4 rounded-md ${
            alertMessage.type === "error"
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          <h3 className="font-bold">{alertMessage.title}</h3>
          <p>{alertMessage.description}</p>
        </div>
      )}
      <div className="w-full mb-8 overflow-x-auto">
        <div className="flex justify-center mb-8 py-2">
          {getNextWeek().map((date) => (
            <div
              key={date.toDateString()}
              className={`p-2 sm:p-3 rounded-lg text-center cursor-pointer min-w-[80px] max-w-[120px] mx-2 ${
                date.toDateString() === selectedDate.toDateString()
                  ? "bg-green-100 text-black"
                  : "bg-white text-black"
              } transition-transform`}
              onClick={() => handleDateClick(date)}
            >
              <div className="text-xs sm:text-sm uppercase truncate">
                {days[date.getDay()]}
              </div>
              <div className="text-lg font-bold border border-gray-300 p-1 mt-2 rounded-md shadow-md truncate">
                {date.getDate()}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
        {timeSlots.map((slot) => {
          const status = getSlotStatus(slot, selectedDate);
          return (
            <div
              key={`${selectedDate.toDateString()}-${slot}`}
              className={`p-2 sm:p-3 rounded-lg text-center font-semibold text-xs sm:text-sm min-h-[50px] flex flex-col justify-center ${
                status === "available"
                  ? "bg-white text-black cursor-pointer hover:bg-gray-100"
                  : status === "booked"
                  ? "bg-[#ffd700] text-[#1a1a2e] cursor-pointer hover:bg-[#e6c200]"
                  : status === "selected"
                  ? "bg-[#4CAF50] text-white cursor-pointer hover:bg-[#45a049]"
                  : "bg-[#cccccc] text-gray-600 cursor-not-allowed"
              } transition-transform`}
              onClick={() =>
                status !== "unavailable" && handleSlotClick(slot, selectedDate)
              }
            >
              <div className="font-bold mb-1">{slot}</div>
              <div className="text-xs">{status}</div>
            </div>
          );
        })}
      </div>
      {selectedSlots.length > 0 && (
        <div className="mt-8 text-center">
          <button
            onClick={proceedToBook}
            className="bg-[#4CAF50] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#45a049] focus:outline-none focus:ring-2 focus:ring-[#45a049] transition-colors"
          >
            Proceed to Book ({selectedSlots.length} slot
            {selectedSlots.length > 1 ? "s" : ""})
          </button>
        </div>
      )}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Booking</h2>

            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
                onClick={cancelBooking}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                onClick={confirmBooking}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
      {showUnbookConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Confirm Unbooking</h2>
            <p className="mb-4">Are you sure you want to unbook this slot?</p>
            {unbookingSlot && (
              <div className="mb-6 font-semibold p-2 bg-gray-100 rounded">
                <div>{unbookingSlot.split("-")[3]}</div>
                <div className="text-sm text-gray-600">
                  {formatShortDate(
                    new Date(unbookingSlot.split("-").slice(0, 3).join("-"))
                  )}
                </div>
              </div>
            )}
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors"
                onClick={cancelUnbooking}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
                onClick={confirmUnbooking}
              >
                Confirm Unbooking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
