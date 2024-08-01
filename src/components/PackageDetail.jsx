import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import packagesData from '../pages/data'; 
import EnquiryForm from '../components/EnquiryForm'; 

const PackageDetail = () => {
  const { id } = useParams();
  const packageData = packagesData.find(pkg => pkg.id === id);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row">
      {/* Main Content */}
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-6">
        <h2 className="text-3xl font-bold mb-6">{packageData.placeName}</h2>

        {/* Overview Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {packageData.images.map((img, index) => (
              <div
                key={index}
                className={`${
                  index % 7 === 0
                    ? 'row-span-2 col-span-2'
                    : 'row-span-1 col-span-1'
                } overflow-hidden rounded-lg`}
              >
                <img
                  src={img}
                  alt={`Overview ${index}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

         
<div className='flex justify-between'>
        {/* Highlights Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-primary pb-2">Highlights</h3>
          <ul className="list-disc ml-6 space-y-2">
            {packageData.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600 text-lg">{highlight}</li>
            ))}
          </ul>
        </div>
        {/* Fixed Sidebar with Price and Availability */}
      <div className=" top-6 w-80 h-auto ml-6">
        <div className="bg-white p-6 rounded-lg shadow-lg top-6 flex justify-between gap-2">
            <div className='flex flex-col gap-2'>
          <div className="text-2xl font-bold mb-4 text-gray-800"> {packageData.price}</div>
          <div className="text-lg text-gray-600 mb-6">per person</div>
          </div>
          <button
  className="bg-gray-500 text-white font-semibold rounded-md px-3 py-1.5 text-sm transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Check Availability
</button>
        </div>
      </div>
      </div>

        {/* Duration Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-primary pb-2">Duration</h3>
          <p className="text-gray-600 text-lg">{packageData.duration}</p>
        </div>

        {/* Itinerary Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-primary pb-2">Multiple Days Itinerary</h3>
          <ul className="list-decimal ml-6 space-y-2">
            {packageData.itinerary.map((day, index) => (
              <li key={index} className="text-gray-600 text-lg">{day}</li>
            ))}
          </ul>
        </div>

        {/* Inclusions Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-primary pb-2">Inclusions</h3>
          <ul className="list-disc ml-6 space-y-2">
            {packageData.inclusions.map((inclusion, index) => (
              <li key={index} className="text-gray-600 text-lg">{inclusion}</li>
            ))}
          </ul>
        </div>

        {/* Exclusions Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-primary pb-2">Exclusions</h3>
          <ul className="list-disc ml-6 space-y-2">
            {packageData.exclusions.map((exclusion, index) => (
              <li key={index} className="text-gray-600 text-lg">{exclusion}</li>
            ))}
          </ul>
        </div>

        {/* Enquiry Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Make an Enquiry
        </button>
      </div>

    

      {/* Enquiry Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <EnquiryForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageDetail;
