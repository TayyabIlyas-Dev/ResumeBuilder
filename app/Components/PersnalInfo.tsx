import React from 'react';

interface PersonalInfoProps {
  fatherName: string;
  age: number;
  religion: string;
  maritalStatus: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ fatherName, age, religion, maritalStatus }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">Personal Info</h3>
     <div className='info-jar px-9 py-2'>
     <p><span className='font-semibold'> Father Name:&nbsp; </span> {fatherName}</p>
      <p><span className='font-semibold'>Age:&nbsp; </span>  {age} years</p>
      <p><span className='font-semibold'>Religion: &nbsp;</span>  {religion}</p>
      <p><span className='font-semibold'>Marital Status: &nbsp;</span>   {maritalStatus}</p>
     </div>
    </div>
  );
};

export default PersonalInfo;
