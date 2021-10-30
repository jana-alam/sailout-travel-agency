import React from "react";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const SingleTour = (props) => {
  const { country, title, description, imageUrl, price, tourists } = props.tour;
  return (
    <div className="shadow-lg">
      {/* top image */}
      <div className="relative">
        <img src={imageUrl} alt="tour" className="" />
        <div className="flex justify-center items-center absolute w-full top-0 h-full">
          <h1 className="font-satisfy text-white text-5xl">{country}</h1>
        </div>
      </div>
      {/* description */}
      <div className="p-6 pb-8">
        <h2 className="font-satisfy text-2xl mb-3">{title}</h2>
        <p className="text-gray-600 h-32">{description}</p>
        <div className="flex justify-between mt-2">
          <p className="flex items-center text-cyan-400">
            <CurrencyDollarIcon className="h-5 w-5 mr-1" />
            {price}
          </p>
          <p className="flex items-center text-cyan-400">
            <UsersIcon className="h-5 w-5 mr-1" />
            {tourists}
          </p>
          <button className="flex items-center bg-yellow-100 text-yellow-400 px-2 py-1 rounded-3xl hover:bg-white hover:text-cyan-400">
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
