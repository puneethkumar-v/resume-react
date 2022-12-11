import React from "react";

const EducationList = ({ education }) => {
  return (
    <div className="educationList">
      <div className="degree">
        <span>{education.degree}</span>
        <span>{education.year}</span>
      </div>
      <h3>{education.college}</h3>
      <ul>
        {education.about.map((list) => (
          <>
            <li>{list.course}</li>
            <li>{list.cgpa ? list.cgpa : null}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default EducationList;
