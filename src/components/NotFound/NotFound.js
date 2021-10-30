import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-7/12 mx-auto flex flex-col space-y-6 mb-4">
      <img src="https://i.ibb.co/mG8pXd8/notFound.png" alt="notfound" />
      <Link className="px-4 py-2 bg-cyan-400 text-center text-white" to="/home">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
