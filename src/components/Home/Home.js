import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Spinner from "../Spinner/Spinner";
import Tours from "../Tours/Tours";
import TravelExperts from "../TravelExperts/TravelExperts";
import WhyBest from "../WhyBest/WhyBest";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tourItems, setTourItems] = useState([]);
  useEffect(() => {
    fetch("https://quiet-cove-73576.herokuapp.com/tours")
      .then((res) => res.json())
      .then((result) => {
        setTourItems(result);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Banner></Banner>
      <Tours tourItems={tourItems}></Tours>
      <WhyBest></WhyBest>
      <TravelExperts></TravelExperts>
    </>
  );
};

export default Home;
