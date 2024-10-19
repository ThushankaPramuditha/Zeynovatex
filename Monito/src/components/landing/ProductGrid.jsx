import React, { useEffect, useState } from 'react';
import productPlaceholder from  "../../assets/images/product.png"; // Placeholder image
import frame49 from  "../../assets/images/Frame 49.png";

const ProductGrid = () => {
  const [productData, setProductData] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Function to fetch product data from the API
    const fetchProductData = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProductData(data); // Set fetched data to state
      } catch (error) {
        setError(error.message); // Set error message if fetching fails
      } finally {
        setLoading(false); // Set loading to false once data is fetched or if there's an error
      }
    };

    fetchProductData(); // Call the fetch function
  }, []); // Empty dependency array means it runs once on mount

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto my-8 px-5 md:px-10 mt-20">
      {/* Heading and Button Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-5">
        <h2 className="custom-text text-center md:text-left text-lg md:text-2xl font-bold">
          How to choose the right product for your pets?
        </h2>
        <button className="w-full md:w-[151px] h-[44px] px-7 py-2 mt-4 md:mt-0 gap-2 rounded-[57px] border-[1.5px] border-solid border-black opacity-100">
          View more
        </button>
      </div>

      {/* Products Section */}
      <h2 className="text-primary text-2xl font-bold mb-6 text-center md:text-left">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product) => (
          <div 
            key={product.id} 
            className="product-card bg-white shadow-md p-2 rounded-tl-lg" 
            style={{ borderRadius: '12px 0px 0px 0px' }}
          >
            <img 
              src={product.image || productPlaceholder} // Use placeholder if no image is provided
              alt={product.name} 
              className="w-full h-[200px] object-cover rounded-tl-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-sm">Product: {product.category || 'N/A'}  <span className="ml-5 text-sm">Size: {product.size || 'N/A'}</span></p>
            <p className="text-md font-bold mt-1">{product.price}</p>
            <button className="ml-2">
              <img src={frame49} alt="frame49" className="frame49 ml-6"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

