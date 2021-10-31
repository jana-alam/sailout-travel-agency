import SingleTour from "../SingleTour/SingleTour";

const Tours = ({ tourItems }) => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center space-y-2 mt-12">
        <h1 className="text-5xl font-satisfy text-cyan-400 text-center">
          Plan your
        </h1>
        <h1 className="text-6xl font-semibold">Perfect Holiday</h1>
        <p className="text-gray-600 text-xl">
          We are offering tours in various countries with affordable prices!!
        </p>
      </div>
      {/* Tours Container */}
      <div className="grid grid-cols-3 gap-8 w-10/12 mx-auto mt-8">
        {tourItems.map((tour) => (
          <SingleTour key={tour._id} tour={tour}></SingleTour>
        ))}
      </div>
    </section>
  );
};

export default Tours;
