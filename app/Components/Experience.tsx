import React from 'react';

interface ExperienceProps {
  experiences: { years: number; role: string; company: string }[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">Experience</h3>
      <div className="info-jar px-9 py-2">
        <ul className="list-disc pl-5">
          {experiences.map((experience, index) => (
            <li key={index} className="font-semibold">
              {experience.years} years as a {experience.role} at {experience.company}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
