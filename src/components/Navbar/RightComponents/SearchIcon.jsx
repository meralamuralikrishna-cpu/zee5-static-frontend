import React from 'react';

const SearchIcon = () => {
  return (
    <div className="flex items-center gap-2 border border-zinc-600 rounded-md px-3 py-1.5 w-64 lg:w-80">
      <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="Search for Movies, Shows, Channels etc."
        className="w-full bg-transparent text-white placeholder-zinc-400 text-xs outline-none"
      />
    </div>
  );
};

export default SearchIcon;
