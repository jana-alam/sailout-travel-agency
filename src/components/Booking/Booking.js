import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const Booking = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const history = useHistory();
  const [tour, setTour] = useState({});

  useEffect(() => {
    const url = `https://quiet-cove-73576.herokuapp.com/tour/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setTour(result));
  }, [id]);

  //   react hook form
  const { register, handleSubmit, reset } = useForm();
  //form handler
  const onSubmit = (data) => {
    const { name, email, tickets, weights, message, phoneNumber, address } =
      data;
    const newBooking = {
      name,
      email,
      address,
      tickets,
      weights,
      message,
      phoneNumber,
      tourTitle: tour?.title,
      tourId: tour?._id,
      tourImageUrl: tour?.imageUrl,
      status: "pending",
    };

    fetch("https://quiet-cove-73576.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Your Tour is Booked successfully!");
          reset();
          history.push("/my-bookings");
        }
      });
  };

  if (!tour?._id) {
    return <Spinner />;
  }
  return (
    user?.email && (
      <section className="mb-4 px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Booking section */}
          <div>
            <h1 className="font-satisfy text-center text-3xl md:text-5xl text-cyan-400">
              Book Now
            </h1>
            <div className="flex justify-center items-center mt-4">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 gap-3"
              >
                {/* name */}
                <div className="space-y-1 col-span-2">
                  <p>Name:</p>
                  <input
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    type="text"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                {/* email */}
                <div className="space-y-1 col-span-2">
                  <p>Email:</p>
                  <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    type="email"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                {/* address */}
                <div className="space-y-1 col-span-2">
                  <p>Address:</p>
                  <textarea
                    {...register("address", { required: true })}
                    type="text"
                    placeholder="Your Address"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* tickets */}
                <div className="space-y-1">
                  <p>Number Of Tickets:</p>
                  <input
                    {...register("tickets", { required: true })}
                    type="number"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                {/* weights */}
                <div className="space-y-1">
                  <p>Maximum Weight (kg):</p>
                  <input
                    {...register("weights", { required: true })}
                    type="number"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                {/* message */}
                <div className="space-y-2 col-span-2">
                  <p>Message:</p>
                  <textarea
                    {...register("message", { required: true })}
                    type="text"
                    placeholder="Any Special Message"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                {/* Phone number*/}
                <div className="col-span-2 space-y-1">
                  <p>Contact Number:</p>
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="text"
                    className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <input
                  type="submit"
                  value="Confirm"
                  className="px-20 py-2 mt-2 bg-yellow-500 text-white col-span-2 cursor-pointer"
                />

                {/* {errors.exampleRequired && <span>This field is required</span>} */}
              </form>
            </div>
          </div>
          {/* Tour Details section */}
          <div className="flex flex-col">
            <h1 className="font-satisfy text-center text-3xl md:text-5xl text-yellow-400 mb-4">
              {tour?.country}
            </h1>
            <img
              src={tour.imageUrl}
              alt="Tour"
              className="md:w-10/12 mx-auto"
            />

            <div className="p-6 pb-8 text-center space-y-1">
              <h2 className="font-satisfy text-2xl">{tour?.title}</h2>
              <p className="">Price Per Person: {tour?.price}</p>
              <p className="">Maximum Tourist Per Trip: {tour?.tourists}</p>
              <p className="text-gray-600 h-32">{tour?.description}</p>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Booking;
