import React from "react";

const Header = () => {
  return (
    <div className="bg-indigo-600 w-full h-[70px] flex justify-between items-center shadow-xl">
      <h2 className="text-white text-3xl font-bold ml-[30px]">Resume Craft</h2>
      <div className="flex justify-between gap-5 items-center mr-[30px]">
        <button className="bg-white h-[40px] px-4 rounded-[6px] text-lg text-indigo-600 font-semibold ">
          Sign Up
        </button>
        <button className="bg-white h-[40px] px-4 rounded-[6px] text-lg text-indigo-600 font-semibold">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Header;
