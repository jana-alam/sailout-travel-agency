import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Spinner = () => {
  return (
    <div className="mx-auto w-12 py-20">
      <RefreshIcon className="animate-spin text-yellow-400" />
    </div>
  );
};

export default Spinner;
