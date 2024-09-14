
import React from 'react';
import heroImage from '../assets/image1.jpg'; 

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-[600px]" 
      style={{ backgroundImage: `url(${heroImage})` }} >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto flex flex-col justify-center h-full px-6 md:px-12 text-white">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Travel memories you'll never forget</h1>
          <p className="text-xl md:text-2xl">See the Vatican Museums like never before</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
