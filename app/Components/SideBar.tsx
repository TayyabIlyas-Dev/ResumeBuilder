import React from 'react';
import { FaFileAlt, FaPalette, FaShareAlt } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  return (
    <div className="w-20 md:w-48 bg-[#3d2f2f] h-screen fixed flex flex-col items-center py-8">
      <div className="mb-10">
        <img src="/path/to/logo.png" alt="Logo" className="w-12 md:w-16" /> {/* Replace with your logo path */}
      </div>
      <div className="text-white flex flex-col gap-8">
        <div className="flex flex-col items-center md:items-start md:pl-4">
          <FaFileAlt className="text-2xl md:text-3xl" />
          <span className="hidden md:block mt-2 text-sm">Content</span>
        </div>
        <div className="flex flex-col items-center md:items-start md:pl-4">
          <FaPalette className="text-2xl md:text-3xl" />
          <span className="hidden md:block mt-2 text-sm">Customize</span>
        </div>
        <div className="flex flex-col items-center md:items-start md:pl-4">
          <FaShareAlt className="text-2xl md:text-3xl" />
          <span className="hidden md:block mt-2 text-sm">Links</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
