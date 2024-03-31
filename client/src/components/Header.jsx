import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-indigo-700 w-full h-[70px] flex justify-between items-center shadow-xl">
      <h2 className="text-white text-3xl font-bold ml-[30px]">Resume Craft</h2>
      <div className="flex justify-between gap-5 items-center mr-[30px]">
        <Link
          className="bg-white px-4 py-2 rounded-[6px] text-lg text-indigo-700 font-semibold items-center "
          to="/signup"
        >
          {" "}
          Sign Up
        </Link>
        <Link
          className="bg-white px-4 py-2 rounded-[6px] text-lg text-indigo-700 font-semibold "
          to="/login"
        >
          {" "}
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Header;
