const overviews = [
  { number: "120+", details: "Total Destination" },
  { number: "500+", details: "Total Packages" },
  { number: "12k+", details: "Total Travelers" },
  { number: "7k+", details: "Positive Reviews" },
];

const Overview = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div>
        <hr className="w-full border-gray-200 border-1" />
        <div className="flex flex-col items-center justify-between gap-4 my-6 md:flex-row md:gap-0 md:my-12">
          {overviews.map((overview) => (
            <div key={overview.number} className="flex items-center gap-2">
              <h1 className="text-4xl font-title">{overview.number}</h1>
              <p className="font-medium text-gray-500">{overview.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
