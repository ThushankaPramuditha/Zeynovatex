import React from "react";
import Herobanner from "../../assets/images/herobanner.png";
import logo from "../../assets/images/logo.png";

const Home = () => {
    return (
        <div className="relative w-full h-[100vh]">
            {/* Banner Image */}
            <img
                src={Herobanner}
                alt="HeroBanner"
                className="w-full h-[850px] object-cover rounded-2xl" // Ensure it takes full width
            />

            {/* Text Section Positioned on the Left */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
                <div className="text-left p-5 md:p-10 max-w-lg ml-5 md:ml-20">
                    <h1 className="text-5xl font-bold text-[#062C59] mt-10">
                        One More Friend
                    </h1>
                    <p className="text-4xl font-bold text-[#062C59] mt-3">Thousand More Fun!</p>
                    <p className="text-lg text-[#003459] mt-5 mb-5">
                    Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Explore Now Button */}
                        <button className="bg-transparent border-2 border-[#062C59] text-[#062C59] font-medium py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-[#062C59] hover:text-white transition">
                            <span>View Intro</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11l5 3-5 3V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <button className="bg-[#062C59] text-white font-medium py-3 px-6 rounded-full hover:bg-[#051B3B] transition">
                            Explore Now
                        </button>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;