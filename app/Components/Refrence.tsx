import React from 'react';

interface ReferenceProps {
  referenceText: string;
}

const Reference: React.FC<ReferenceProps> = ({ referenceText }) => {
  return (
    <div className="personal-info-container py-2">
      <h3 className="personal-info-title underline font-extrabold px-3 py-2">Reference</h3>
      <div className="info-jar px-9 py-2">
        <p className="font-bold">{referenceText}</p>
      </div>
    </div>
  );
};

export default Reference;
