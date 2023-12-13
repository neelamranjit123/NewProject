import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">Travel Blogs</h1>
        <div className="flex space-x-4">
          <Link to="/login">
            <div className="bg-blue-900 py-2 px-4 rounded shadow text-white cursor-pointer">
              Log In
            </div>
          </Link>
          <Link to="/register">
            <div className="bg-blue-900 py-2 px-4 rounded shadow text-white cursor-pointer">
              Register
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
