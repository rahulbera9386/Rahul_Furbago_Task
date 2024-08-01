
import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const Card = ({ packageData }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full  transition-transform transform hover:scale-105 cursor-pointer">
      <img
        src={packageData.url}
        alt={packageData.placeName}
        className="w-full h-36 object-cover"
      />
      <div className="p-6">
        <p className="text-sm font-semibold text-indigo-600 mb-2">
          {packageData.category} - {packageData.country}
        </p>
        <h3 className="text-lg font-bold text-gray-900">{packageData.placeName}</h3>
        <div className="flex items-center justify-between mt-3">
          {packageData.bestseller && (
            <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full">
              Bestseller
            </span>
          )}
          {packageData.instantBooking && (
            <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full">
              Instant Booking
            </span>
          )}
        </div>
        <div className="flex items-center mt-3">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="text-gray-700">{packageData.rating} / 5</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-xl font-bold text-gray-800">
            {packageData.price}
          </span>
          <span className="text-sm text-red-600 font-semibold">
            {packageData.discount}
          </span>
        </div>
        <Link
          to={`/package/${packageData.id}`}
          className="block mt-6 bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;

