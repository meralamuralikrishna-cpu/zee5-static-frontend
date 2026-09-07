import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center" aria-label="ZEE5 Home">
      <img
        src="https://akamaividz2.zee5.com/image/upload/frontend/branding/images/version-2/logo.png"
        alt="ZEE5"
        className="h-9 w-auto"
      />
    </Link>
  );
};

export default Logo;
