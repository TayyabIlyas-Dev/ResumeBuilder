import React from 'react';

interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">My Skills</h3>
      <div className="info-jar px-9 py-2">
        <ul className="list-disc pl-5">
          {skills.map((skill, index) => (
            <li key={index} className="font-semibold">{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
