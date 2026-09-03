import React from 'react';

const Profile = () => {
  return (
    <button className="p-2 text-white hover:text-zinc-300 cursor-pointer" aria-label="Menu">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
};

export default Profile;
