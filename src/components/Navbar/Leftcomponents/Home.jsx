import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link to="/" className="relative cursor-pointer text-white font-semibold">
      Home
      <span className="absolute -bottom-5 left-0 right-0 h-[3px] bg-white rounded-full" />
    </Link>
  );
};

export default Home;
