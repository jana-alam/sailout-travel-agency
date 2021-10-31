import { EyeIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import BookedItem from "../BookedItem/BookedItem";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/bookings/user/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log(result.status);
        setBookings(result);
      });
  }, [user.email]);

  const deleteBooking = (id) => {
    const url = `http://localhost:5000/bookings/user/${id}`;
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
      <div className="text-center">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          Your Bookings
        </h1>
      </div>
      <div className="md:w-8/12 mx-auto space-y-2 mt-8">
        <div className="flex border-2 border-cyan-400 divide-x-2 divide-yellow-400 justify-between px-4 py-2">
          <h2>Tour Title</h2>
          <p className="pl-2">Tickets</p>
          <p className="pl-2">Status</p>
          <button>
            <EyeIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        {bookings.map((booked) => (
          <BookedItem
            key={booked.tourId}
            bookedInformation={booked}
            deleteBooking={deleteBooking}
          ></BookedItem>
        ))}
      </div>
    </section>
  );
};

export default MyBookings;
