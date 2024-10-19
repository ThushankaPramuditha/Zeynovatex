import React from 'react';
import knowledge1 from "../../assets/images/knowledge1.png";
import knowledge2 from "../../assets/images/knowledge2.png";
import knowledge3 from "../../assets/images/knowledge3.png";

const knowledgeData = [
    { image: knowledge1,
      title: 'How to choose the right product for your pets?',
      context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { image: knowledge2 ,
        title: 'How to choose the right product for your pets?',
        context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { image: knowledge3 ,
        title: 'How to choose the right product for your pets?',
        context: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

const Knowledge = () => {
    return (
        <div className="container mx-auto my-8 px-5 md:px-10 mt-20 flex-col">
        {/* Heading and Button Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
          <h2 className="custom-text text-center md:text-left text-lg md:text-2xl font-bold">
            You already know ?
          </h2>
          <button className="w-full md:w-[151px] h-[44px] px-7 py-2 mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100">
            View more
          </button>
        </div>

        {/* Products Section */}
        <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">Useful Pet Knowledge</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeData.map((knowledge, index) => (
            <div 
              key={index} 
              className="product-card bg-white shadow-md p-2 rounded-tl-lg" 
              style={{ borderRadius: '12px 0px 0px 0px' }}
            >
              <img 
                src={knowledge.image} 
                alt={knowledge.name} 
                className="w-full h-[300px] object-cover rounded-tl-lg"
              />
              <button className="bg-[#00A7E7] text-white text-sm py-1 px-5 rounded-full hover:bg-[#00A7E7] transition mt-2">
               Pet knowledge
                </button>
              <h3 className="text-lg font-semibold mt-2">{knowledge.title}</h3>
              <p className="text-md text-gray-600 mt-5 mb-5">{knowledge.context}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Knowledge;




