import React from "react";
import data from "../data/data";

const Template = ({ data }) => {
  return (
    <div className="max-w-800 mx-auto p-4 border border-gray-300 rounded">
      <div className="text-center border-b-2 py-2 border-blue-800">
        <h1 className="text-3xl font-bold text-blue-800">{data.name}</h1>
        <p className="text-sm">
          {data.email} | {data.phone}
        </p>
      </div>
      <div className="mt-2 pb-3 border-b-2">
        <h2 className="text-2xl font-bold text-blue-800">Experience</h2>
        <ul className="list-none">
          {data.experience.map((exp, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-lg font-bold">{exp.position}</h3>
              <div className="text-sm">
                <p>{exp.company}</p>
                <p>
                  {" "}
                  <i className="text-gray-500">{exp.duration}</i>
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {exp.description}
              </p>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {exp.description}
              </p>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {exp.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2 pb-3 border-b-2">
        <h2 className="text-2xl font-bold text-blue-800">Education</h2>
        <ul className="list-none">
          {data.education.map((edu, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-lg font-bold">{edu.degree}</h3>
              <div className="text-sm">
                <p className="font-semibold text-gray-600">
                  {" "}
                  {edu.institution}
                </p>
                <p className="text-gray-500 ">
                  <i>{edu.duration}</i>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2 pb-3 border-b-2">
        <h2 className="text-2xl font-bold text-blue-800">Projects</h2>
        <ul className="list-none">
          {data.projects.map((project, index) => (
            <li key={index} className="mt-2">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {project.description}
              </p>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {project.description}
              </p>
              <p>
                {" "}
                <span className="font-bold text-blue-800">-</span>{" "}
                {project.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <h2 className="text-2xl font-bold text-blue-800">Skills</h2>
        <ul className="list-none">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="mt-2 text-white px-2 bg-blue-800 inline-block min-w-min p-1 rounded mx-2"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template;
