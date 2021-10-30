import {
  CalendarIcon,
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import React from "react";

const Packages = () => {
  const nums = [1, 2, 3, 4, 5, 6];
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center space-y-2 mt-12">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          Plan your
        </h1>
        <h1 className="text-6xl font-semibold">Perfect Holiday</h1>
        <p className="text-gray-600 text-xl">
          We are offering tours in various countries with affordable prices!!
        </p>
      </div>
      {/* Packages Container */}
      <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto mt-8">
        {nums.map((n) => (
          <div className="shadow-lg">
            {/* top image */}
            <div className="relative">
              <img
                src="https://i.ibb.co/VHcLT3v/sea-with-hill.jpg"
                alt="package"
                className=""
              />
              <div className="flex justify-center items-center absolute w-full top-0 h-full">
                <h1 className="font-satisfy text-white text-5xl">Bali</h1>
              </div>
            </div>
            {/* description */}
            <div className="p-6 pb-8">
              <h2 className="font-satisfy text-2xl mb-3">Romantic Italy</h2>
              <p className="text-gray-600">
                The great Place to spend time with life partner
              </p>
              <div className="flex justify-between mt-2">
                <p className="flex items-center text-cyan-400">
                  <CurrencyDollarIcon className="h-5 w-5 mr-1" />
                  300
                </p>
                <p className="flex items-center text-cyan-400">
                  <UsersIcon className="h-5 w-5 mr-1" />
                  20
                </p>
                <button className="flex items-center bg-yellow-100 text-yellow-400 px-2 py-1 rounded-3xl hover:bg-white hover:text-cyan-400">
                  <ShoppingCartIcon className="h-5 w-5 mr-1" />
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
