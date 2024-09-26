import React from "react";
import Image from "../assets/grocery-image.png";
import { MdDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="lg:px-40 px-14 lg:mt-64 mt-36 space-y-5">
      <div className="lg:w-3/6 space-y-5">
        <h1 className="lg:text-6xl text-white font-semibold text-4xl">
          Groceries
        </h1>
        <h1 className="lg:text-6xl text-white font-semibold text-4xl">
          delivery in{" "}
          <span className="lg:text-6xl text-4xl text-white font-light">
            15mins
          </span>
        </h1>
        <p className="text-lg text-white">
          Grocify offers a wide range of products, including fresh products,
          meats, dairy, baked products and non-perishable goods.{" "}
        </p>
        <div className="flex flex-col lg:flex-row lg:space-y-0 space-y-4 sm:space-y-6 lg:space-x-3">
          <button className="text-white bg-yellow-300 rounded-full py-3 px-10 font-medium">
            Order Now
          </button>
          <div className="flex justify-center items-center">
            <button className="flex items-center text-white  rounded-full py-2 px-8 font-medium">
              Download Now
              <MdDownload className="text-xl text-white ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-center lg:justify-end">
        <img
          src={Image}
          alt="Image"
          className="w-full sm:w-1/2 md:w-2/5 lg:mt-20 xl:absolute bottom-0 right-30"
        />
      </div>
    </div>
  );
};

export default Hero;
