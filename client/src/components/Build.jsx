import React from "react";
import { Link } from "react-router-dom";

const Build = () => {
  return (
    <div className=" m-auto flex flex-col justify-center items-center gap-1 mt-[70px] mb-[20px]">
      <h1 className="text-[40px]">Create Your Perfect Resume</h1>
      <h2 className="text-[20px] text-gray-500">
        Build a professional resume in minutes with our easy-to-use{" "}
        <span className="text-indigo-700 font-semibold">Resume Craft</span>
      </h2>
      <Link
        className="bg-indigo-700 hover:bg-indigo-600 text-white px-5 py-3 rounded-md text-xl font-semibold mt-5
       "
        to="/craft"
      >
        Craft My Resume
      </Link>
    </div>
  );
};

export default Build;
