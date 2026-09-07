import React from 'react';
import { Link } from 'react-router-dom';

const Tvshows = () => {
  return (
    <Link to="/tv-shows" className="cursor-pointer text-zinc-300 hover:text-white transition-colors">
      TV Shows
    </Link>
  );
};

export default Tvshows;
