import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

const BookedItem = ({ bookedInformation, deleteBooking }) => {
  const handleDelete = (id) => {
    const result = window.confirm("Are you want to delete?");
    if (result) {
      deleteBooking(id);
    }
  };
  return (
    <div className="flex border-2 border-cyan-400 divide-x-2 divide-yellow-400 justify-between px-4 py-2">
      <h2>{bookedInformation.tourTitle}</h2>
      <p className="pl-2">{bookedInformation.tickets}</p>
      <p className="pl-2">{bookedInformation.status}</p>
      <button onClick={() => handleDelete(bookedInformation._id)}>
        <TrashIcon className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
};

export default BookedItem;
