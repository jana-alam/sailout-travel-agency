import {
  CameraIcon,
  LocationMarkerIcon,
  OfficeBuildingIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import React from "react";
import Benefit from "../Benefit/Benefit";

const WhyBest = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="text-center space-y-4 mt-12">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          Why We
        </h1>
        <h1 className="text-6xl font-semibold">Are The Best</h1>
        <p className="text-gray-600 text-xl">
          We are offering special befits with every tours you will love!!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-10/12 mx-auto my-8">
        <Benefit
          title={"Visit Many Places"}
          content={
            "You will roame more than 10 places untill you become satisfied!"
          }
        >
          <LocationMarkerIcon className="text-indigo-500 " />
        </Benefit>
        <Benefit
          title={"Roaming & Shopping"}
          content={
            "We will roame in a way to get the taste of shopping while traveling"
          }
        >
          <OfficeBuildingIcon className="text-yellow-500" />
        </Benefit>
        <Benefit
          title={"Travel With Network"}
          content={
            "We provide 24 hours Internet facilty through satelite deep at the ocean"
          }
        >
          <WifiIcon className="text-red-500" />
        </Benefit>
        <Benefit
          title={"Photo Shooting"}
          content={
            "3 Cameraman will be with us to capture your  valuable moments"
          }
        >
          <CameraIcon className="text-green-500" />
        </Benefit>
      </div>
    </section>
  );
};

export default WhyBest;
