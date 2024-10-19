import React, { useEffect, useState } from 'react';

const PetsGrid = () => {
  const [pets, setPets] = useState([]); // State to store fetched pets
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data); // Set the pets data from the API
      } catch (error) {
        setError(error.message); // Set error message if there's an error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPets();
  }, []); // Empty dependency array to run the effect once on mount

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error if there's any
  }

  return (
    <div className="container mx-auto my-8 px-5 md:px-10 ml-[110px]">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
        <h2 className="custom-text text-center md:text-left text-lg md:text-2xl font-bold">
          What's new?
        </h2>
        <button className="w-full md:w-[151px] h-[44px] px-7 py-2 mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100 mr-[60px]">
          View more
        </button>
      </div>

      {/* Pets Section */}
      <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">
        Take A Look At Some Of Our Pets
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="pet-card bg-white shadow-md p-2 rounded-tl-lg h-[378px] w-[280px] md:w-[280px] md:h-[378px] flex flex-col items-center"
            style={{ borderRadius: '12px 0px 0px 0px' }}
          >
            <img
              src={pet.image} // Use the image from the fetched data
              alt={pet.name}
              className="w-full h-[200px] object-cover rounded-tl-lg"
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

export default PetsGrid;

