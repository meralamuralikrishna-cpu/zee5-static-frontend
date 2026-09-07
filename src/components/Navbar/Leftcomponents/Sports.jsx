import React from 'react';
import { Link } from 'react-router-dom';

const Sports = () => {
  return (
    <Link to="/sports" className="cursor-pointer text-zinc-300 hover:text-white transition-colors">
      Sports
    </Link>
  );
};

export default Sports;
