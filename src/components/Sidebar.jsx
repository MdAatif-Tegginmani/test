import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-100 w-64 h-screen flex flex-col">
     

    <nav className="flex-1 p-4">
    <ul className="space-y-4">
      <li className="flex items-center space-x-3 hover:text-white">
        <Link to="/" className="font-medium">
          Home
        </Link>
      </li>
      <li className="flex items-center space-x-3 hover:text-white">
        <Link to="/smoothies" className="font-medium">
          Smoothies
        </Link>
      </li>
      <li className="flex items-center space-x-3 hover:text-white">
        <Link to="/contact" className="font-medium">
          Contact
        </Link>
      </li>
    </ul>
  </nav>

     
    </div>
  );
};

export default Sidebar;
