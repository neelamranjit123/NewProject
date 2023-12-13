// Header1.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logout from '../pages/Logout';

const Header1 = () => {
  return (
    <header className="bg-gray-800 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl text-white font-bold">Travel Blogs</h1>
        <div className="flex space-x-4">
          <Logout className="bg-blue-100 py-2 px-4 rounded shadow text-white cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header1;
