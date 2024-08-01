
import React from 'react';
import { Link } from 'react-router-dom';
import { GoSearch } from "react-icons/go";
import { FaHeart, FaShoppingCart, FaSignInAlt, FaUser } from 'react-icons/fa';


const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center px-[160px] py-6" >
      <Link to="/" className="text-2xl font-bold text-white hover:text-gray-300 transition duration-300">
        TravelNest
      </Link>
      <div className="flex flex-grow mx-4 items-center relative">
      <GoSearch className="absolute left-3 text-gray-500" />
      <input 
        type="text" 
        placeholder="Search for tours, activities, and more" 
        className="w-[50%] px-12 py-3 border rounded-full border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition duration-300"
      />
    </div>
      <div className="flex space-x-4">
      <button className=" text-white px-4 py-2 rounded-lg shadow-md flex items-center  transition duration-300">
          <FaHeart className="text-white mr-2" /> Wishlist
        </button>
        <button className=" text-white px-4 py-2 rounded-lg shadow-md flex items-center  transition duration-300">
          <FaShoppingCart className="text-white mr-2" /> Cart
        </button>
        <button className=" text-white px-4 py-2 rounded-lg shadow-md flex items-center  transition duration-300">
          <FaUser className="text-white mr-2" /> Login
        </button>
        <button className=" text-white px-4 py-2 rounded-lg shadow-md flex items-center  transition duration-300">
          <FaSignInAlt className="text-white mr-2" /> Sign Up
        </button>
        
      </div>
    </nav>
  );
}

export default Navbar;
