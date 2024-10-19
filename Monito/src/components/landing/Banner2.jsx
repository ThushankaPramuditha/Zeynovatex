import React from "react";
import Banner from "../../assets/images/Banner2.png";
import paw from "../../assets/images/paw.png";

const Banner2 = () => {
    return (
        <div className="relative w-full mt-10 px-5 md:px-20 rounded-xl mb-8">
            {/* Banner Image */}
            <img
                src={Banner}
                alt="Banner 2"
                className="w-full h-[378px] object-cover rounded-2xl"
            />

            {/* Text Section Positioned on the Left */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
                <div className="text-left p-5 md:p-10 max-w-lg ml-5 md:ml-20">
                    <h1 className="text-5xl font-bold text-[#062C59] ml-[100px] mt-10">
                        Adoption <img src={paw} alt="Paw" className="inline-block w-8 h-8" />
                    </h1>
                    <p className="text-2xl font-bold text-[#062C59] mt-3 ml-[100px]">We Need Help. So Do They.</p>
                    <p className="text-md text-gray-600 mt-5 mb-5 ml-[100px]">
                        Adopt a pet and give it a home. It will love you back unconditionally.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 ml-[100px]">

                        {/* Explore Now Button */}
                        <button className="bg-[#062C59] text-white font-medium py-3 px-6 rounded-full hover:bg-[#051B3B] transition">
                            Explore Now
                        </button>
                        <button className="bg-transparent border-2 border-[#062C59] text-[#062C59] font-medium py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-[#062C59] hover:text-white transition">
                            <span>View Intro</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11l5 3-5 3V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;
