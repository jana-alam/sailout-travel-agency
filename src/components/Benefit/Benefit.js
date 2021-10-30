import React from "react";

const Benefit = (props) => {
  console.log(props);
  return (
    <div className="text-center space-y-4 p-2 py-4 rounded-xl bg-white">
      <div className=" animate-pulse h-12 w-12 mx-auto rounded-full">
        {props.children}
      </div>
      <p className="text-gray-500">{props?.content}</p>
    </div>
  );
};

export default Benefit;
