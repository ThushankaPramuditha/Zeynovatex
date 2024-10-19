import React, { useEffect, useState } from 'react';
import dog1 from "../../assets/images/dog1.png";
import dog2 from "../../assets/images/dog2.png";
import dog3 from "../../assets/images/dog3.png";
import dog4 from "../../assets/images/dog4.png";

const PetMore = () => {
  const [petsData, setPetsData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPetsData(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchPetsData(); 
  }, []); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8 px-5 md:px-10 w-full max-w-screen-xl">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
        <h2 className="custom-text text-center md:text-left text-lg md:text-2xl font-bold">
          What's new?
        </h2>
        <button className="w-full md:w-[151px] h-[44px] px-7 py-2 mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100 mr-[50px]">
          View more
        </button>
      </div>

      {/* Pets Section */}
      <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">
        See More Puppies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {petsData.map((pet) => (
          <div
            key={pet.id}
            className="pet-card bg-white shadow-md p-2 rounded-tl-lg flex flex-col items-center"
            style={{ borderRadius: '12px 0px 0px 0px' }}
          >
            <img
              src={pet.image || (pet.id === 'MO231' ? dog1 : pet.id === 'MO502' ? dog2 : pet.id === 'MO102' ? dog3 : dog4)} // Use fallback images if no image is provided
              alt={pet.name}
              className="w-full h-[300px] object-cover rounded-tl-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
            <p className="text-sm">Gene: {pet.gene}</p>
            <p className="text-sm">Age: {pet.age}</p>
            <p className="text-md font-bold mt-1">{pet.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetMore;
