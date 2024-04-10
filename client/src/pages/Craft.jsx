import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import Personal from "../components/forms/Personal";
// import StepperComp from "../components/StepperComp";
// import Template from "../components/Template";
import data from "../data/data";
import Template2 from "../components/Template2";

const Craft = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}

      <div className="bg-indigo-800 p-4" style={{ width: "17%" }}>
        <Link className="text-2xl text-white font-bold" to="/">
          Resume Craft
        </Link>
        {/* ------ */}
        {/* <StepperComp /> */}
        {/* ------ */}
      </div>

      {/* Middle Section */}

      <div className="bg-gray-200 p-4" style={{ width: "45%" }}>
        <Personal />
      </div>

      {/* Right Section */}

      <div className="bg-white p-4 flex-grow overflow-y-auto custom-scrollbar">
        {/* <Template data={data} /> */}
        <Template2 data={data} />
      </div>
    </div>
  );
};

export default Craft;
