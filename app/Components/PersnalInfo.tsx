import React from 'react';

interface PersonalInfoProps {
  fatherName: string;
  age: number;
  Contact: number;  // Changed from number to string for flexibility in displaying phone numbers
  religion: string;
  language: string;
  maritalStatus: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ fatherName, age, Contact, religion, language, maritalStatus }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">Personal Info</h3>
      <div className="info-jar px-9 py-2">
        <p><span className="font-semibold py-1">Father Name:&nbsp;</span> {fatherName}</p>
        <p><span className="font-semibold py-1">Age:&nbsp;</span> {age} years</p>
        <p><span className="font-semibold py-1">Contact:&nbsp;</span> {Contact} </p>
        <p><span className="font-semibold py-1">Religion:&nbsp;</span> {religion}</p>
        <p><span className="font-semibold py-1">Language:&nbsp;</span> {language}</p>
        <p><span className="font-semibold py-1">Marital Status:&nbsp;</span> {maritalStatus}</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
