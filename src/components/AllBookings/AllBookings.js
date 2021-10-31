import React, { useEffect, useState } from "react";
import TableRow from "../TableRow/TableRow";

const AllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings/all")
      .then((res) => res.json())
      .then((result) => setAllBookings(result));
  }, []);

  const bookingDelete = (id) => {
    const url = `http://localhost:5000/bookings/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("deleted successfully");
          const remainingBookings = allBookings.filter(
            (booking) => booking._id !== id
          );
          setAllBookings(remainingBookings);
        }
      });
  };
  return (
    <section className="container mx-auto">
      {/* Top sectoin */}
      <div className="text-center">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          All Bookings
        </h1>
      </div>
      {/* Table Section */}
      <div className="flex flex-col w-10/12 mx-auto mt-6">
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {/* Table starts */}
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tour
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Tickets
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allBookings.map((singleBooking) => (
                    <TableRow
                      key={singleBooking._id}
                      singleBooking={singleBooking}
                      bookingDelete={bookingDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBookings;
