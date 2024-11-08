import React from 'react';

interface ObjectiveProps {
  objective: string;
}

const Objective: React.FC<ObjectiveProps> = ({ objective }) => {
  return (
    <div className="objective-container py-2 sm:py-4">
      <h3 className="objective-title font-extrabold underline px-4 py-2">Objective</h3>
      <p className="objective-text px-6 py-2 sm:px-[90px]">&quot;{objective}&quot;</p> {/* Use &quot; for double quotes */}
    </div>
  );
};

export default Objective;
