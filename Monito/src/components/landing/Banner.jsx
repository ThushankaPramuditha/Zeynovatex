import React from 'react';
import holdingdog from '../../assets/images/girlholdingdog.png';

const Banner = () => {
    return (
        <div className="bg-[#003459] ml-[140px] mt-20 md-[50px] mr-10 w-[83%] rounded-xl flex items-center justify-between p-10 h-[400px] relative  overflow-hidden">
       
            {/* Left Section: Image */}
            <div className="flex-shrink-0 relative">
    <div 
        className="bg-[#002A48] absolute rounded-[0_99px_0_0] opacity-100"
        style={{
            width: '587.54px',    
            height: '987.54px',  
            top: '20.72px',      
            left: '51.49px',     
            transform: 'rotate(-65.25deg)', 
            zIndex: 0, 
        }}>
    </div>
    <img 
        src={holdingdog} 
        alt="Person holding dog" 
        className="h-[360px] w-auto object-cover rounded-lg mt-10 z-10 relative" 
    />
</div>

            {/* Right Section: Text and Buttons */}
            <div className="relative">
                {/* Adjusted Background Shape */}
                <div className="bg-[#FCEED5] w-[890px] h-[1100px] absolute top-[-480px] left-[-10px] rounded-tl-[99px] rotate-[-60.25deg] opacity-100 z-0"></div>
                {/* Content Section */}
                <div className="relative flex flex-col justify-center max-w-lg space-y-4 z-10 p-10 left-[-20px]">
                    <h1 className="text-5xl font-bold text-[#062C59]">
                        One More Friend
                    </h1>
                    <h2 className="text-4xl font-semibold text-[#062C59]">
                        Thousands More Fun!
                    </h2>
                    <p className="text-lg text-[#062C59]">
                        Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. 
                        We have 200+ different pets that can meet your needs!
                    </p>

                    {/* Buttons Section */}
                    <div className="flex space-x-4">
                        {/* View Intro Button */}
                        <button className="bg-transparent border-2 border-[#062C59] text-[#062C59] font-medium py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-[#062C59] hover:text-white transition">
                            <span>View Intro</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11l5 3-5 3V7z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Explore Now Button */}
                        <button className="bg-[#062C59] text-white font-medium py-3 px-6 rounded-full hover:bg-[#051B3B] transition">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
