import React, { useRef } from "react";

import { Rerousel } from "rerousel";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  const ref = useRef(null);
  return (
    <div className="relative">
      <Rerousel itemRef={ref} interval={3000}>
        <img
          ref={ref}
          src="https://i.ibb.co/DrnrXDV/bali.jpg"
          alt="slider"
          className=""
        />

        <img
          src="https://i.ibb.co/3pPCjYf/boat.jpg"
          alt="slider"
          className=""
        />
      </Rerousel>

      <div className="absolute top-1/3 left-1/4">
        <h1 className="font-satisfy text-8xl text-cyan-400">Lets go now </h1>
        <h3 className=" mt-4 text-7xl font-bold text-gray-50">
          Explore The World
        </h3>
      </div>
    </div>
  );
};

export default HomeCarousel;
