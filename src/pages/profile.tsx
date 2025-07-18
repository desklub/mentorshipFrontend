// import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <div className="bg-cyan-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-white justify-center text-center p-5 font-bold max-auto ">
              Welcome to Mentorship platform
            </h1>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="text-white hover:text-cyan-200 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/"
                className="bg-white text-cyan-200 px-4 py-2 rounded-lg hover:bg-cyan100 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
