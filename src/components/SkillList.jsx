import React from "react";

const SkillList = ({ skill }) => {
  return (
    <div className="skillList">
      <h3>{skill.title}</h3>
      <ul>
        {skill.technologies.map((list) => (
          <>
            <li>{list}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
