import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { FaFilter } from 'react-icons/fa';

const ITEMS_PER_PAGE = 6; 

const PetsGridLarge = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Fetch pet data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        setPetsData(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  // Calculate the number of pages
  const totalPages = Math.ceil(petsData.length / ITEMS_PER_PAGE);
  const indexOfLastPet = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPet = indexOfLastPet - ITEMS_PER_PAGE;
  const currentPets = petsData.slice(indexOfFirstPet, indexOfLastPet);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <p>Loading pets....</p>;
  }

  if (error) {
    return <p>Error fetching pets: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8 px-5 md:px-10 flex flex-col md:flex-row">
      <div className={`md:block ${sidebarOpen ? 'block' : 'hidden'} md:w-1/4`}>
        <Sidebar />
      </div>
      <div className="flex-1">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row sm:flex-col justify-between items-center w-full mb-5">
          <h2 className="text-primary text-center md:text-left text-lg md:text-2xl font-bold">
            Small Dogs <span className="text-sm text-gray-500 ml-5">{petsData.length} Puppies</span>
          </h2>
          {/* Button for sorting */}
          <button className="w-full md:w-[171px] h-[32px] sm:h-[28px] sm:text-[10px] md:h-[44px] px-3 md:px-7 py-1 mt-4 md:mt-0 rounded-full border-[1.5px] border-solid border-black opacity-100 text-sm md:text-base">
            Sort by popular
          </button>
          {/* Filter Icon for mobile view */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="flex items-center">
              <FaFilter className="text-primary w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pets Section */}
        <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">
          Take A Look At Some Of Our Pets
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Ensure to set grid-cols-2 */}
          {currentPets.map((pet) => (
            <div
              key={pet.id}
              className="pet-card bg-white shadow-md p-2 rounded-lg h-[378px] flex flex-col items-center"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
              <p className="text-sm">Gene: {pet.gene}</p>
              <p className="text-sm">Age: {pet.age}</p>
              <p className="text-md font-bold mt-1">{pet.price}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetsGridLarge;
