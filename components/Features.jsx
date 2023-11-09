import SectionTitle from "./shared/SectionTitle";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const Features = () => {
  return (
    <div className="py-8 bg-gray-100 md:py-16">
      <div className="flex flex-col items-center justify-center mx-auto md:max-w-7xl">
        <div className="md:w-1/4">
          <SectionTitle leftDash={true} rightDash={true}>
            Features
          </SectionTitle>
          <h1 className="text-4xl font-bold text-center whitespace-nowrap">
            Why Chose Ous?
          </h1>
        </div>
        <div>
          <div className="grid gap-4 px-4 py-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 md:py-10 md:px-0">
            {[...Array(6).keys()].map((item) => (
              <div key={item} className="p-5 bg-white rounded-md shadow md:p-8">
                <div className="relative">
                  <BookmarkIcon className="z-10 w-10 h-10" />
                  <div className="absolute top-0 w-5 h-5 bg-red-600 rounded-full opacity-60" />
                </div>
                <h3 className="text-lg font-bold">Cheap Rates</h3>
                <p className="font-medium text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
