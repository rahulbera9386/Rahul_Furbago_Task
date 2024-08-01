import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import  packages  from './data';
import Card from "../components/TravelPackageCard";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {packages.map((item) => (
          <Card key={item.id} packageData={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
