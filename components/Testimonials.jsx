import Image from "next/image";
import SectionTitle from "./shared/SectionTitle";

const Testimonials = () => {
  return (
    <div className="py-8 bg-gray-100 md:py-16">
      <div className="flex flex-col items-center gap-6 mx-auto md:max-w-7xl md:flex-row md:gap-72">
        <div className="">
          <Image
            src="/testimonials_image.png"
            alt=""
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="md:w-1/4">
          <SectionTitle leftDash={true} rightDash={true}>
            Testimonials
          </SectionTitle>
          <h1 className="text-4xl font-bold text-center whitespace-nowrap">
            What Travelers Say
          </h1>
          <div className="flex flex-col items-center px-4 space-y-2 lg:px-0 md:space-y-4">
            <Image
              src="/quote.png"
              alt=""
              width={500}
              height={500}
              className="w-10 h-10"
            />
            <h3 className="text-lg font-bold text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              explicabo nesciunt, ipsam, natus adipisci labore blanditiis porro
              quibusdam dolore maxime incidunt ipsum voluptas consequuntur fugit
              ducimus? Ipsa, adipisci. Culpa neque esse harum quo ab sunt fugiat
              odio aliquam voluptatibus consequatur?
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
