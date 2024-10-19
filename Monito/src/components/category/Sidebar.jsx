const SidebarFilter = () => {
    return (
      <div className="w-64 p-4 bg-white shadow-md rounded-lg h-[700px]">
        {/* Gender Filter */}
        <div className="mb-4">
          <h2 className="text-xl text-[#003459] font-bold mb-3">Filter</h2>  
          <h3 className="text-lg font-semibold mb-2">Gender</h3>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Female</span>
            </label>
          </div>
        </div>
  
        {/* Color Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Color</h3>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-red-500" />
              <div className="flex ">
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2 ml-3"></div>
                <span className="ml-2 text-gray-700">Red</span>
              </div>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-400" />
                <div className="flex ">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mt-2 ml-3"></div>
                     <span className="ml-2 text-gray-700">Apricot</span>
                </div>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-black" />
               <div className="flex ">
                  <div className="w-3 h-3 bg-black rounded-full mt-2 ml-3"></div>
                  <span className="ml-2 text-gray-700">Black</span>
                </div>
            </label>

            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-800" />
              <div className="flex ">
              <div className="relative w-3 h-3 mt-2 ml-3 border border-gray-500 rounded-full">
                    <div className="absolute top-0 left-0 w-1.5 h-3 bg-black rounded-l-full"></div>
                    <div className="absolute top-0 right-0 w-1.5 h-3 bg-white rounded-r-full"></div>
                    </div>
                <span className="ml-2 text-gray-700">Black & White</span>
              </div>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-gray-400" />
              <div className="flex ">
                <div className="w-3 h-3 bg-gray-400 rounded-full mt-2 ml-3"></div>
              <span className="ml-2 text-gray-700">Silver</span>
              </div>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-yellow-600" />
                <div className="flex ">
                 <div className="w-3 h-3 bg-yellow-600 rounded-full mt-2 ml-3"></div>
                 <span className="ml-2 text-gray-700">Tan</span>
                </div>
            </label>
          </div>
        </div>
  
        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Price</h3>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 p-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
  
        {/* Breed Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Breed</h3>
          <div className="flex flex-col space-y-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Small</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Medium</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Large</span>
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  export default SidebarFilter;
  

// const SidebarFilter = ({ setGenderFilter, setColorFilter, setMinPrice, setMaxPrice, setBreedFilter }) => {
//   const handleGenderChange = (e) => {
//     const { name, checked } = e.target;
//     setGenderFilter((prev) => ({ ...prev, [name]: checked }));
//   };

//   const handleColorChange = (e) => {
//     const { name, checked } = e.target;
//     setColorFilter((prev) => ({ ...prev, [name]: checked }));
//   };

//   const handleBreedChange = (e) => {
//     const { name, checked } = e.target;
//     setBreedFilter((prev) => ({ ...prev, [name]: checked }));
//   };

//   return (
//     <div className="w-64 p-4 bg-white shadow-md rounded-lg h-[700px]">
//       {/* Gender Filter */}
//       <div className="mb-4">
//         <h2 className="text-xl text-[#003459] font-bold mb-3">Filter</h2>
//         <h3 className="text-lg font-semibold mb-2">Gender</h3>
//         <div className="flex flex-col space-y-2">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="male"
//               onChange={handleGenderChange}
//               className="form-checkbox h-4 w-4 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700">Male</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="female"
//               onChange={handleGenderChange}
//               className="form-checkbox h-4 w-4 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700">Female</span>
//           </label>
//         </div>
//       </div>

//       {/* Color Filter */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Color</h3>
//         <div className="flex flex-col space-y-2">
//           {['red', 'apricot', 'black', 'bw', 'silver', 'tan'].map(color => (
//             <label key={color} className="inline-flex items-center">
//               <input
//                 type="checkbox"
//                 name={color}
//                 onChange={handleColorChange}
//                 className="form-checkbox h-4 w-4 text-blue-600"
//               />
//               <span className="ml-2 text-gray-700 capitalize">{color}</span>
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Price Filter */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Price</h3>
//         <div className="flex flex-col space-y-2">
//           <input
//             type="number"
//             placeholder="Min Price"
//             onChange={(e) => setMinPrice(e.target.value)}
//             className="border p-2 rounded"
//           />
//           <input
//             type="number"
//             placeholder="Max Price"
//             onChange={(e) => setMaxPrice(e.target.value)}
//             className="border p-2 rounded"
//           />
//         </div>
//       </div>

//       {/* Breed Filter */}
//       <div className="mb-4">
//         <h3 className="text-lg font-semibold mb-2">Breed</h3>
//         <div className="flex flex-col space-y-2">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="small"
//               onChange={handleBreedChange}
//               className="form-checkbox h-4 w-4 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700">Small</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="medium"
//               onChange={handleBreedChange}
//               className="form-checkbox h-4 w-4 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700">Medium</span>
//           </label>
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               name="large"
//               onChange={handleBreedChange}
//               className="form-checkbox h-4 w-4 text-blue-600"
//             />
//             <span className="ml-2 text-gray-700">Large</span>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarFilter;
