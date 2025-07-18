import React from "react";
import { Link } from "react-router-dom";
import mentor from "../assets/mentor.jpg";

function Home() {
  return (
    <>
      {/* Navigation Header */}
      <div className="bg-cyan-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-white justify-center text-center p-5 font-bold max-auto ">
              Welcome to Mentorship platform
            </h1>
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-white hover:text-cyan-200 transition-colors duration-200"
              >
                Logout
              </Link>
              <Link
                to="/profile"
                className="bg-white text-cyan-200 px-4 py-2 rounded-lg hover:bg-cyan100 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex item-center justify-center">
        {/* background image */}
        <img
          src={mentor}
          alt="Mentorship"
          className=" absolute insert-0 w-full h- full object-cover "
        />
        ;{/* Overlay */}
        <div className="absolute insert-0 bg-gradient-to-r from-black/70"></div>
        {/* Hero content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Unlock Your <span className="text-cyan-400">Potential</span>
          </h1>
          <p className="text-xl md:text-2xl mb-0 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Connect with your experienced mentors who can guide you on your
            journey to success.Whether you're starting your career or looking to
            grow, we have the right mentor for you.{" "}
          </p>

          {/* Call to Action Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/find-mentor"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold "
            >
              Find Mentor
            </Link>

            <Link
              to="/become-mentor"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold "
            >
              Become a Mentor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
