import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import BookedItem from "../BookedItem/BookedItem";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `https://quiet-cove-73576.herokuapp.com/bookings/user/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.status);
        setBookings(result);
      });
  }, [user.email]);

  const deleteBooking = (id) => {
    const url = `http://localhost:5000/bookings/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount) {
          alert("deleted successfully");
          const remainingBookings = bookings.filter(
            (booking) => booking._id !== id
          );
          setBookings(remainingBookings);
        }
      });
  };

  return (
    <section className="py-8 bg-gray-50">
      {/* Top section */}
      <div className="text-center">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          Your Bookings
        </h1>
      </div>
      {/* Table section */}
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
                  {bookings.map((booked) => (
                    <BookedItem
                      key={booked.tourId}
                      bookedInformation={booked}
                      deleteBooking={deleteBooking}
                    ></BookedItem>
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

export default MyBookings;
