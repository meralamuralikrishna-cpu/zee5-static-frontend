import React from 'react';
import Navbar from './Navbar/Navbar';
import Background from './background/Background';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-[#0f0617] text-white flex flex-col relative">
      <Navbar />
      <Background />
    </div>
  );
};

export default MainPage;
