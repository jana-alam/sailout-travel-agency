import React from "react";
import { useForm } from "react-hook-form";

const AddTour = () => {
  const { register, handleSubmit, reset } = useForm();
  //form handler
  const onSubmit = (data) => {
    const { country, title, description, price, tourists, imageUrl } = data;
    const newTour = {
      country,
      title,
      description,
      price,
      tourists,
      imageUrl,
    };

    fetch("http://localhost:5000/tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTour),
    })
      .then((res) => res.json())
      .then((result) => {
        // giving alert & resetting form if success

        if (result.insertedId) {
          alert("New Tour Added Successfully");
          reset();
        }
      });
  };
  return (
    <div className="container mx-auto pb-12">
      <h2 className="font-satisfy text-4xl text-center text-yellow-400">
        Add a new tour
      </h2>
      {/* Form section */}
      <div className="flex justify-center items-center mt-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-3"
        >
          {/* country */}
          <div className="space-y-1">
            <p>Country name:</p>
            <input
              {...register("country", { required: true })}
              type="text"
              placeholder="Indonesia"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* tour title */}
          <div className="space-y-1">
            <p>Title:</p>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Dreaming Indonesia"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* tour short description */}
          <div className="space-y-2 col-span-2">
            <p>Description:</p>
            <textarea
              {...register("description", { required: true })}
              type="text"
              placeholder="Dreaming Indonesia"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* tour price */}
          <div className="space-y-1">
            <p>Price:</p>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="230"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* Person per tour */}
          <div className="space-y-1">
            <p>Maximum Tourists:</p>
            <input
              {...register("tourists", { required: true })}
              type="number"
              placeholder="20"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          {/* Person per tour */}
          <div className="col-span-2 space-y-1">
            <p>Image Url:</p>
            <input
              {...register("imageUrl", { required: true })}
              type="url"
              className="w-full px-2 py-1 ring-1 ring-cyan-300 outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <input
            type="submit"
            value="Add tour"
            className="px-20 py-2 mt-2 bg-cyan-500 text-white col-span-2"
          />

          {/* {errors.exampleRequired && <span>This field is required</span>} */}
        </form>
      </div>
    </div>
  );
};

export default AddTour;
