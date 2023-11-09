import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative w-full h-96">
      <Image
        src="/banner.webp"
        alt=""
        width={1000}
        height={1000}
        className="object-cover object-center w-full h-full"
      />
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full gap-2 text-white">
        <h1 className="font-bold text-7xl">About</h1>
        <h2 className="text-xl font-medium">
          Login /{" "}
          <span className="text-xl font-bold text-orange-600">Sign Up</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
