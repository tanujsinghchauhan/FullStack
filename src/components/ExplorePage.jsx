import React from "react";
import { Link } from "react-router-dom";

const venues = [
  {
    id: 1,
    name: "Venue 1",
    image: "/assets/img1.jpeg",
    location: "456 Elm Street",
  },
  {
    id: 2,
    name: "Venue 2",
    image: "/assets/img2.jpeg",
    location: "456 Elm Street",
  },
  {
    id: 3,
    name: "Venue 3",
    image: "/assets/img3.jpeg",
    location: "456 Elm Street",
  },
  {
    id: 4,
    name: "Venue 4",
    image: "/assets/img4.jpeg",
    location: "456 Elm Street",
  },
  {
    id: 5,
    name: "Venue 5",
    image: "/assets/img5.jpeg",
    location: "456 Elm Street",
  },
  {
    id: 6,
    name: "Venue 6",
    image: "/assets/img6.jpeg",
    location: "789 Oak Street",
  },
];

const ExplorePage = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen bg-[url('/assets/background.jpeg')]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 text-white fixed top-0 w-full z-10  bg-opacity-70">
        <div className="text-2xl font-bold font-mono border-r-2 border-orange-500 pr-2 animate-typewriter">
          SpotFindr
        </div>
        <ul className="flex gap-4 flex-grow justify-center">
          <li>
            <Link
              to="/"
              className="text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/explore"
              className="text-white hover:bg-gray-700 px-4 py-2 rounded"
            >
              Explore
            </Link>
          </li>
        </ul>
        <Link
          to="/auth"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-purple-500"
        >
          Login/Signup
        </Link>
      </nav>

      {/* Venue Cards */}
      <div className="flex flex-wrap gap-5 justify-center pt-24 px-5">
        {venues.map((venue) => (
          <div
            className="w-80 rounded-lg overflow-hidden shadow-lg bg-white text-center relative transition-transform transform hover:scale-105 hover:shadow-2xl"
            key={venue.id}
          >
            <img
              src={venue.image}
              alt={venue.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-3">{venue.name}</h3>
              <p className="text-gray-700">{venue.location}</p>
              <Link
                to={`/booking/${venue.id}`} // Navigates to the VenueBookingPage
                state={{ venue }} // Passes the venue data through state
              >
                <button className="mt-4 bg-orange text-black px-4 py-2 rounded transition-colors hover:bg-purple-500">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
