import { TrashIcon } from "@heroicons/react/outline";
import React from "react";

const BookedItem = ({ bookedInformation }) => {
  const handleDelete = (id) => {
    const url = `http://localhost:5000/bookings/user/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("deleted successfully");
        }
      });
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
