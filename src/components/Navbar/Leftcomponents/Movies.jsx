import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <Link to="/movies" className="cursor-pointer text-zinc-300 hover:text-white transition-colors">
      Movies
    </Link>
  );
};

export default Movies;