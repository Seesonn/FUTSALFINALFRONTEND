import React, { useState, useEffect } from 'react';

export default function BookingSlot() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [activeSlot, setActiveSlot] = useState(null);

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

  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const timeSlots = Array.from({ length: 18 }, (_, i) => {
    const hour = (i + 6) % 24;
    return `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}:00 ${hour < 12 ? 'AM' : 'PM'}`;
  });

  const getNextWeek = () => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);
      return date;
    });
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleSlotClick = (slot) => {
    const slotDate = new Date(selectedDate);
    const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
    slotDate.setHours(
      period === 'PM' && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && period === 'AM' ? 0 : parseInt(hours),
      parseInt(minutes)
    );

    const bookingKey = `${selectedDate.toDateString()}-${slot}`;
    const isBooked = bookings[bookingKey];

    if (isBooked) {
      setPopupMessage('Do you want to unbook this slot?');
    } else {
      setPopupMessage('Do you want to book this slot?');
    }
    setShowPopup(true);
    setActiveSlot(bookingKey);
  };

  const confirmBooking = () => {
    if (activeSlot) {
      setBookings((prev) => ({
        ...prev,
        [activeSlot]: !prev[activeSlot],
      }));
      setShowPopup(false);
      setActiveSlot(null);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setActiveSlot(null);
  };

  const getSlotStatus = (slot) => {
    const slotDate = new Date(selectedDate);
    const [hours, minutes, period] = slot.match(/(\d+):(\d+) (\w+)/).slice(1);
    slotDate.setHours(
      period === 'PM' && hours !== '12' ? parseInt(hours) + 12 : hours === '12' && period === 'AM' ? 0 : parseInt(hours),
      parseInt(minutes)
    );

    const now = new Date();
    const bookingKey = `${selectedDate.toDateString()}-${slot}`;

    if (slotDate < now) return 'unavailable';

    if (bookings[bookingKey]) return 'booked';
    return 'available';
  };

  return (
    <div className=" bg-black bg-opacity-20 backdrop-blur-lg px-2 py-24 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.15)] overflow-hidden relative">
      <header className="text-center mb-8">
      <h1 className="text-[#04153F] text-4xl font-bold mb-8 text-center">Booking Schedule</h1>
        <p className="text-black text-lg mt-4 ">Don't lose your chance, book now!</p>
      </header>
      <div className="flex justify-start mb-8 overflow-x-auto scrollbar-thin scrollbar-thumb-[#4CAF50] scrollbar-track-[#1a1a2e] py-2">
        {getNextWeek().map((date) => (
          <div
            key={date.toDateString()}
            className={`p-2 sm:p-3 rounded-lg text-center cursor-pointer min-w-[80px] max-w-[120px] mr-4 ${
              date.toDateString() === selectedDate.toDateString()
                ? 'bg-green-100 text-black'
                : 'bg-white text-black'
            } transition-transform`}
            onClick={() => handleDateClick(date)}
            style={{ flex: 1, minWidth: '80px', maxWidth: '120px' }}
          >
            <div className="text-xs sm:text-sm uppercase truncate">{days[date.getDay()]}</div>
            <div className="text-lg font-bold border border-gray-300 p-1 mt-2 rounded-md shadow-md truncate">{date.getDate()}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4 md:gap-6">
        {timeSlots.map((slot) => {
          const status = getSlotStatus(slot);
          return (
            <div
              key={slot}
              className={`p-2 sm:p-3 rounded-lg text-center font-semibold text-xs sm:text-sm min-h-[50px] flex flex-col justify-center ${
                status === 'available'
                  ? 'bg-white text-black cursor-pointer'
                  : status === 'booked'
                  ? 'bg-[#ffd700] text-[#1a1a2e]'
                  : 'bg-[#cccccc] text-gray-600 cursor-not-allowed'
              } transition-transform`}
              onClick={() => status !== 'unavailable' && handleSlotClick(slot)}
            >
              <div className="font-bold mb-1">{slot}</div>
              <div className="text-xs">{status}</div>
            </div>
          );
        })}
      </div>
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-200 p-6 rounded-lg text-center z-50 shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <p className="text-lg mb-4">{popupMessage}</p>
          <div>
            <button
              className="bg-[#4CAF50] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#45a049] focus:outline-none focus:ring focus:ring-[#45a049]"
              onClick={confirmBooking}
            >
              Confirm
            </button>
            <button
              className="bg-[#ff4d4d] text-white py-2 px-4 rounded-md shadow-md ml-2 hover:bg-[#e60000] focus:outline-none focus:ring focus:ring-[#e60000]"
              onClick={closePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}