import { CheckCircleIcon, TrashIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

const TableRow = ({ singleBooking, bookingDelete }) => {
  const { name, email, tourTitle, tourImageUrl, tickets, status, _id } =
    singleBooking;
  // Update Tour Status
  const [tourStatus, setTourStatus] = useState(status);
  const changeStatus = (id) => {
    const url = `https://quiet-cove-73576.herokuapp.com/bookings/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        setTourStatus("confirmed");
      });
  };
  //   Delete Tour booking
  const delBooking = (id) => {
    const result = window.confirm("Are you want to delete?");
    if (result) {
      bookingDelete(id);
    }
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <img src={tourImageUrl} alt="tour" className="w-40 mb-3" />
        <span>{tourTitle}</span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p>{name}</p>
        <p>{email}</p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {tickets}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{tourStatus}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
        {tourStatus === "pending" ? (
          <>
            <button onClick={() => changeStatus(_id)}>
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </button>
            <button onClick={() => delBooking(_id)}>
              <TrashIcon className="h-6 w-6 text-red-500" />
            </button>
          </>
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
};

export default TableRow;
