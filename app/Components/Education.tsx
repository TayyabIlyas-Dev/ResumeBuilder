import React from 'react';

interface EducationProps {
  educationList: string[];
}

const Education: React.FC<EducationProps> = ({ educationList }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">My Education</h3>
      <div className="info-jar px-9 py-2">
        <ul className="list-disc pl-5">
          {educationList.map((education, index) => (
            <li key={index} className="font-semibold">{education}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
