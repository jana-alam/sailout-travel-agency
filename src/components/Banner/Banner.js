import React from "react";

const Banner = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <div className="py-4 bg-cyan-50 flex flex-col items-center justify-center">
        <h1 className="font-satisfy text-3xl md:text-5xl lg:text-7xl text-cyan-400">
          Lets go now{" "}
        </h1>
        <h3 className=" mt-4 text-5xl md:text-6xl font-bold text-gray-900">
          Explore The World
        </h3>
      </div>
      <img
        className="md:col-span-2"
        src="https://i.ibb.co/3pPCjYf/boat.jpg"
        alt="slider"
      />
    </div>
  );
};

export default Banner;
