import React from 'react';

interface UserProfileProps {
  name: string;
  profession: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, profession }) => {
  return (
    <div className="profile-container my-8">
      <h1 className="profile-name text-center text-2xl font-extrabold">{name}</h1>
      <h2 className="profile-profession text-center pt-1 font-semibold">{profession}</h2>
    </div>
  );
};

export default UserProfile;
