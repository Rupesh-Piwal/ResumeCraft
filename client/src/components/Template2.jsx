import React from "react";
import data from "../data/data";

const Template2 = ({ data }) => {
  return (
    <div className="grid grid-cols-3 h-full border border-gray-800">
      {/* First part */}
      <div className="col-span-1 bg-gray-300">
        <img
          className="bg-red-400 w-[120px] h-[120px] rounded-[50%] my-2 mx-[25%] border-4 border-yellow-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xh-bX_R2lwK-OT_5Jxdtr7GVT-dh_OkbEeWUy7He2jNIZFIAUXMWS16Ojax56Cl0IaE&usqp=CAU"
          alt=""
        />

        <div className="bg-gray-400 w-full h-[200px]">
          <h2 className="text-2xl font-bold text-gray-800 ml-3 ">Education</h2>
        </div>
        <div className="bg-gray-500 w-full h-[200px]">
          <h2 className="text-2xl font-bold text-gray-800 ml-3">Skills</h2>
          <ul className="list-none">
            {data.skills.map((skill, index) => (
              <li
                key={index}
                className="mt-2 text-white px-2 bg-gray-700 inline-block min-w-min p-1 rounded mx-2"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-gray-800 ml-3">Contact</h2>
          <ul>
            <li>
              <span className="font-bold text-gray-800">•</span>9325575937
            </li>
            <li>
              <span className="font-bold text-gray-800">•</span>
              steve49@gmail.com
            </li>
            <li>
              <span className="font-bold text-gray-800">•</span>street123,
              smudge area,sydney
            </li>
          </ul>
        </div>
      </div>
      {/* Second part */}
      <div className="col-span-2">
        <h1 className="text-3xl font-semibold text-center mt-4 mb-4 text-gray-700">
          {data.name}
        </h1>
        <div className="mt-2 pb-3 border-b-2 border-gray-400 ml-3">
          <h2 className="text-2xl font-bold text-gray-800">Experience</h2>
          <ul className="list-none">
            {data.experience.map((exp, index) => (
              <li key={index} className="mt-1">
                <h3 className="text-lg text-gray-700 font-bold">
                  {exp.position}
                </h3>
                <div className="text-sm flex justify-between mb-1">
                  <p className="text-gray-600 font-semibold">{exp.company}</p>
                  <p>
                    <i className="text-gray-500 mr-1">{exp.duration}</i>
                  </p>
                </div>
                <p>
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {exp.description}
                </p>
                <p>
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {exp.description}
                </p>
                <p>
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {exp.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2 pb-3 ml-3">
          <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
          <ul className="list-none">
            {data.projects.map((project, index) => (
              <li key={index} className="mt-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p>
                  {" "}
                  <span className="font-bold text-gray-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-gray-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-gray-800">•</span>{" "}
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
          <ul className="list-none">
            {data.projects.map((project, index) => (
              <li key={index} className="mt-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
          <ul className="list-none ">
            {data.projects.map((project, index) => (
              <li key={index} className="mt-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
                <p>
                  {" "}
                  <span className="font-bold text-blue-800">•</span>{" "}
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Template2;
