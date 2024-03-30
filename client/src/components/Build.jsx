import React from "react";

const Build = () => {
  return (
    <div className=" m-auto flex flex-col justify-center items-center gap-1 mt-[100px]">
      <h1 className="text-[40px]">Create Your Perfect Resume</h1>
      <h2 className="text-[20px] text-gray-500">
        Build a professional resume in minutes with our easy-to-use{" "}
        <span className="text-indigo-500 font-semibold">Resume Craft</span>
      </h2>
      <button
        className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-md text-xl font-semibold mt-5
       "
      >
        Craft My Resume
      </button>
    </div>
  );
};

export default Build;
