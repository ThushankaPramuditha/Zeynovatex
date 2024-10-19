import React from "react";
import Banner from "../../assets/images/Banner3.png";

const Banner3 = () => {
  return (
    <div className="relative w-[90%] max-w-full ml-[60px] mt-[70px] px-5 md:px-20 rounded-xl mb-8 overflow-hidden">
      {/* Banner Image */}
      <img
        src={Banner}
        alt="Banner 3"
        className="w-full h-[378px] object-cover rounded-2xl"
      />
      
      {/* Text Section Positioned on the Right */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center md:items-start md:left-[920px] p-5 md:p-10">
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-5xl font-bold text-white mt-10">
            One More Friend
          </h1>
          <p className="text-4xl font-bold text-white mt-3">Thousand More Fun!</p>
          <p className="text-sm text-white mt-5 mb-5">
            Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Explore Now Button */}
            <button className="bg-transparent border-2 border-white text-white font-small py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-[#062C59] hover:text-white transition">
              <span>View Intro</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11l5 3-5 3V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-white text-[#062C59] font-small font-semibold py-3 px-6 rounded-full hover:bg-white transition">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
