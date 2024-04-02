import React from "react";
import data from "../data/data";

const Template = ({ data }) => {
  return (
    <div className="resume">
      <div className="header">
        <h1>{data.name}</h1>
        <p>
          {data.email} | {data.phone}
        </p>
      </div>
      <div className="section">
        <h2>Experience</h2>
        <ul>
          {data.experience.map((exp, index) => (
            <li key={index}>
              <h3>{exp.position}</h3>
              <p>
                {exp.company} | {exp.duration}
              </p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Education</h2>
        <ul>
          {data.education.map((edu, index) => (
            <li key={index}>
              <h3>{edu.degree}</h3>
              <p>
                {edu.institution} | {edu.duration}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Projects</h2>
        <ul>
          {data.projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template;
