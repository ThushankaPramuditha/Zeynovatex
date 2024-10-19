import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const ITEMS_PER_PAGE = 6; 

const PetsGridLarge = () => {
  const [petsData, setPetsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch pet data from the API
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
        if (!response.ok) {
          throw new Error("Failed to fetch pets");
        }
        const data = await response.json();
        setPetsData(data); // Assuming the API returns an array of pet objects
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

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Render loading or error states
  if (loading) {
    return <p>Loading pets...</p>;
  }

  if (error) {
    return <p>Error fetching pets: {error}</p>;
  }

  return (
    <div className="container mx-auto my-8 px-5 md:px-10 flex space-x-6 mt-[30px]"> 
      <Sidebar /> 
      {/* Pets Grid */}
      <div className="flex-1">  {/* Flex-1 will allow the grid to take the remaining space */}
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
          <h2 className="text-primary text-center md:text-left text-lg md:text-2xl font-bold">
           Small Dogs <span className="text-sm text-gray-500 ml-5">{petsData.length} Puppies</span>
          </h2>
          <button className="w-full md:w-[171px] h-[44px] px-7 py-2 mr-[70px] mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100">
            Sort by popular
          </button>
        </div>

        {/* Pets Section */}
        <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">
          Take A Look At Some Of Our Pets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentPets.map((pet) => (
            <div
              key={pet.id}
              className="pet-card bg-white shadow-md p-2 rounded-tl-lg h-[378px] w-[280px] flex flex-col items-center"
              style={{ borderRadius: '12px 0px 0px 0px' }}
            >
              <img
                src={pet.image}
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

// import React, { useEffect, useState } from 'react';
// import SidebarFilter from './Sidebar'; // Ensure to import your filter component
// // import Sidebar from './Sidebar';

// const ITEMS_PER_PAGE = 6; // Number of items to display per page

// const PetsGridLarge = () => {
//   const [petsData, setPetsData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
  
//   // Filter states
//   const [genderFilter, setGenderFilter] = useState({ male: false, female: false });
//   const [colorFilter, setColorFilter] = useState({});
//   const [minPrice, setMinPrice] = useState('');
//   const [maxPrice, setMaxPrice] = useState('');
//   const [breedFilter, setBreedFilter] = useState({ small: false, medium: false, large: false });

//   // Fetch pet data from the API
//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
//         if (!response.ok) {
//           throw new Error("Failed to fetch pets");
//         }
//         const data = await response.json();
//         setPetsData(data); // Assuming the API returns an array of pet objects
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPets();
//   }, []);

//   // Calculate filtered pets
//   const filteredPets = petsData.filter((pet) => {
//     // Filter by gender
//     const genderMatches = (genderFilter.male && pet.gender === 'Male') || (genderFilter.female && pet.gender === 'Female');

//     // Filter by color
//     const colorMatches = colorFilter[pet.color] || Object.keys(colorFilter).length === 0;

//     // Filter by price
//     const priceMatches = (!minPrice || pet.price >= minPrice) && (!maxPrice || pet.price <= maxPrice);

//     // Filter by breed
//     const breedMatches = (breedFilter.small && pet.breed === 'Small') || (breedFilter.medium && pet.breed === 'Medium') || (breedFilter.large && pet.breed === 'Large');

//     return (genderMatches || !Object.values(genderFilter).some(Boolean)) && colorMatches && priceMatches && breedMatches;
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredPets.length / ITEMS_PER_PAGE);
//   const indexOfLastPet = currentPage * ITEMS_PER_PAGE;
//   const indexOfFirstPet = indexOfLastPet - ITEMS_PER_PAGE;
//   const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

//   // Handle page change
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Render loading or error states
//   if (loading) {
//     return <p>Loading pets...</p>;
//   }

//   if (error) {
//     return <p>Error fetching pets: {error}</p>;
//   }

//   return (
//     <div className="container mx-auto my-8 px-5 md:px-10 flex space-x-6 mt-[30px]"> 
//       <SidebarFilter 
//         setGenderFilter={setGenderFilter}
//         setColorFilter={setColorFilter}
//         setMinPrice={setMinPrice}
//         setMaxPrice={setMaxPrice}
//         setBreedFilter={setBreedFilter}
//       />
//       {/* Pets Grid */}
//       <div className="flex-1">
//         {/* Header Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
//           <h2 className="text-primary text-center md:text-left text-lg md:text-2xl font-bold">
//            Small Dogs <span className="text-sm text-gray-500 ml-5">{filteredPets.length} Puppies</span>
//           </h2>
//           <button className="w-full md:w-[171px] h-[44px] px-7 py-2 mr-[70px] mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100">
//             Sort by popular
//           </button>
//         </div>

//         {/* Pets Section */}
//         <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">
//           Take A Look At Some Of Our Pets
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {currentPets.map((pet) => (
//             <div
//               key={pet.id}
//               className="pet-card bg-white shadow-md p-2 rounded-tl-lg h-[378px] w-[280px] flex flex-col items-center"
//               style={{ borderRadius: '12px 0px 0px 0px' }}
//             >
//               <img
//                 src={pet.image}
//                 alt={pet.name}
//                 className="w-full h-[200px] object-cover rounded-tl-lg"
//               />
//               <h3 className="text-lg font-semibold mt-2">{pet.name}</h3>
//               <p className="text-sm">Gene: {pet.gene}</p>
//               <p className="text-sm">Age: {pet.age}</p>
//               <p className="text-md font-bold mt-1">{pet.price}</p>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center mt-6">
//           {Array.from({ length: totalPages }, (_, index) => (
//             <button
//               key={index + 1}
//               onClick={() => handlePageChange(index + 1)}
//               className={`mx-1 px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-primary text-white' : 'bg-white text-primary'}`}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PetsGridLarge;
