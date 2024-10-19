import React from 'react';
import sellerlogo1 from "../../assets/images/Frame 34.png";
import sellerlogo2 from "../../assets/images/Frame 35.png";
import sellerlogo3 from "../../assets/images/Frame 36.png";
import sellerlogo4 from "../../assets/images/Frame 37.png";
import sellerlogo5 from "../../assets/images/Frame 38.png";
import sellerlogo6 from "../../assets/images/Frame 39.png";

const SellerData = [
    { image: sellerlogo1 },
    { image: sellerlogo2 },
    { image: sellerlogo3 },
    { image: sellerlogo4 },
    { image: sellerlogo5 },
    { image: sellerlogo6 },
];

const Seller = () => {
    return (
        <div className="flex flex-col items-center w-full mt-10 px-5 md:px-20 overflow-x-hidden max-w-full">
            {/* Heading and Button Section */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
                <h2 className="text-lg md:text-2xl font-semibold text-center md:text-left mb-4 md:mb-0">
                    How to choose the right product for your pets?
                </h2>
                <button className="w-full text-sm md:w-[200px] h-[44px] px-7 py-2 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100 mt-4 md:mt-0">
                    View all of our sellers
                </button>
            </div>

            {/* Seller Logos Section */}
            <div className="flex flex-wrap justify-center gap-5 md:gap-10">
                {SellerData.map((seller, index) => (
                    <div 
                        key={index} 
                        className="w-[120px] h-[80px] md:w-[151.43px] md:h-[112px] flex justify-center items-center"
                    >
                        <img 
                            src={seller.image} 
                            alt={`Seller logo ${index + 1}`} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seller;
