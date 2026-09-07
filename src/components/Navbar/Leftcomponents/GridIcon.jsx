import React from 'react';
import { Link } from 'react-router-dom';

const GridIcon = () => {
  return (
    <Link to="/browse" aria-label="Browse" className="grid grid-cols-3 gap-1 w-4 h-4 cursor-pointer">
      {[...Array(9)].map((_, i) => (
        <span key={i} className="w-1 h-1 bg-zinc-300 rounded-sm" />
      ))}
    </Link>
  );
};

export default GridIcon;
