import React from "react";

const TravelExperts = () => {
  return (
    <section className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
      <div className="p-8 space-y-5 text-center">
        <h1 className="text-5xl font-satisfy text-cyan-400">Travel Experts</h1>
        <p>
          We have professional travel experts who will be guiding you throughout
          your entire journey. You will love their company till the end of your
          tour.
        </p>
        <p>
          They are oficilay trained from worls travels guide, London to make the
          tourist guided as per their demand.
        </p>
      </div>
      <div>
        <img
          src="https://i.ibb.co/GQqzwbc/travel-guide.jpg"
          alt="travelexpert"
        />
      </div>
    </section>
  );
};

export default TravelExperts;
