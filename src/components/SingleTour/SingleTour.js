import React from "react";
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import { useHistory } from "react-router";

const SingleTour = (props) => {
  const { _id, country, title, description, imageUrl, price, tourists } =
    props.tour;
  const history = useHistory();

  const handleBookNow = (id) => {
    history.push(`/booking/${id}`);
  };
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
      <div className=" p-1 sm:p-2 md:p-6 pb-8">
        <h2 className="font-satisfy text-2xl mb-3">{title}</h2>
        <p className="text-gray-600 h-40 sm:h-32 md:h-40 xl:h-32">
          {description}
        </p>
        <div className="flex justify-between mt-2">
          <p className="flex items-center text-cyan-400">
            <CurrencyDollarIcon className="h-5 w-5 mr-1" />
            {price}
          </p>
          <p className="flex items-center text-cyan-400">
            <UsersIcon className="h-5 w-5 mr-1" />
            {tourists}
          </p>
          <button
            onClick={() => handleBookNow(_id)}
            className="flex items-center bg-yellow-100 text-yellow-400 px-2 py-1 rounded-3xl hover:bg-white hover:text-cyan-400 cursor-pointer"
          >
            <ShoppingCartIcon className="h-5 w-5 mr-1" />
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;
