// VenueBookingPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const VenueBookingPage = () => {
  const location = useLocation();
  const { venue } = location.state;
  const [message, setMessage] = useState("");

  const handleBooking = () => {
    setMessage("Your booking request will be reviewed by admin.");
  };

  return (
    <div className="min-h-screen bg-custom-bg flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">{venue.name}</h1>
        <img
          src={venue.image}
          alt={venue.name}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-gray-700 text-lg mb-6">Location: {venue.location}</p>
        <p className="text-green-500 font-bold text-lg mb-6">
          Status: Available
        </p>

        {/* Date Input */}
        <div className="mb-4">
          <label htmlFor="date" className="block font-semibold mb-2">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Time Input */}
        <div className="mb-4">
          <label htmlFor="time" className="block font-semibold mb-2">
            Select Time Slot: Start
          </label>
          <input
            type="time"
            id="time"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <label htmlFor="time" className="block font-semibold mb-2">
            Select Time Slot: End
          </label>
          <input
            type="time"
            id="time"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Book Button */}
        {/* <button className="w-full p-3 bg-orange text-black rounded-md hover:bg-purple-500 transition duration-300">
          Confirm Booking
        </button> */}
        <button
          className="w-full p-3 bg-orange text-white rounded-md hover:bg-purple-500 transition duration-300"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

        {/* Display the message after the button is clicked */}
        {message && (
          <p className="text-green-600 mt-4 text-center">{message}</p>
        )}
      </div>
    </div>
  );
};

export default VenueBookingPage;
