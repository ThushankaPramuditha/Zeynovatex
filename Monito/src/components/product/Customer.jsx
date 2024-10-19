import React, { useState, useEffect } from "react";

const Custumer = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("https://monitor-backend-rust.vercel.app/api/customers"); //api endpoint for customers
        const data = await response.json();
        setCustomers(data); 
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchCustomers();
  }, []);

  const totalPages = Math.ceil(customers.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-[90%] mx-auto mt-[50px]">
      <h2 className="text-[#062C59] text-2xl font-bold mt-10 ml-[50px]">Our Lovely Customers</h2>
      <div className="flex flex-wrap justify-center space-x-4 mt-10">
        {customers
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .map((customer, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={customer.image} // Use the image from the customer data
                alt={`Customer ${index + 1}`}
                className="w-[250px] h-[300px] object-cover rounded-md cursor-pointer"
              />
              <p className="mt-2 text-center text-lg font-semibold">{customer.name}</p>
              <p className="text-center text-gray-600">{customer.pet}</p>
            </div>
          ))}
      </div>
      <div className="flex items-center justify-center space-x-4 mt-4">
        {/* Page number buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-10 h-2 rounded-lg transition duration-200 ease-in-out ${
              currentPage === index ? 'bg-[#062C59]' : 'bg-gray-300'
            }`}
          >
            <span className="text-transparent">•</span> {/* Use a dot to represent the page */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Custumer;
