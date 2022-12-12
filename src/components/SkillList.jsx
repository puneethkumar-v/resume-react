import React from "react";

const SkillList = ({ skill }) => {
  return (
    <div className="skillList">
      <h3>{skill.title}</h3>
      <ul>
        {skill.technologies.map((list, id) => (
          <div key={id}>
            <li>{list}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
