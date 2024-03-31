import React from "react";
import { Link } from "react-router-dom";

const Craft = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}

      <div className="bg-indigo-900 p-4" style={{ width: "15%" }}>
        <Link className="text-2xl text-white font-bold" to="/">
          Resume Craft
        </Link>
      </div>

      {/* Middle Section */}

      <div className="bg-gray-200 p-4" style={{ width: "40%" }}>
        <h2 className="text-xl font-bold mb-4">Middle Section</h2>
        <p>This is the content of the middle section.</p>
      </div>

      {/* Right Section */}

      <div className="bg-gray-300 p-4 flex-grow">
        <h2 className="text-xl font-bold mb-4">Right Section</h2>
        <p>This is the content of the right section.</p>
      </div>
    </div>
  );
};

export default Craft;
