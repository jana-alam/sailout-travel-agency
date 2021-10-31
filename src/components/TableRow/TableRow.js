import { CheckCircleIcon, TrashIcon } from "@heroicons/react/outline";
import React from "react";

const TableRow = ({ singleBooking, bookingDelete }) => {
  const { name, email, tourTitle, tourImageUrl, tickets, status, _id } =
    singleBooking;
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
      <td className="px-6 py-4 whitespace-nowrap">{status}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
        <button>
          <CheckCircleIcon className="h-6 w-6 text-green-500" />
        </button>
        <button onClick={() => delBooking(_id)}>
          <TrashIcon className="h-6 w-6 text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
