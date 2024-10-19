import React from "react";
import logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <div
      className="w-full mt-10 mb-1"
      style={{
        background: "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      {/* Subscription Section */}
      <div className="flex flex-col items-center justify-center p-8">
  <div className="bg-[#003459] text-white px-8 py-6 rounded-lg w-full max-w-[89%] text-center flex">
    <h2 className="text-2xl font-semibold mb-6 mt-5 mr-5">Register Now So You Don't Miss Our Programs</h2>
    <div className="flex items-center justify-center bg-white px-5 py-1 rounded-2xl border-2 border-gray-300 w-full max-w-4xl">
      <input
        type="email"
        placeholder="Enter your Email"
        className="p-3 rounded-xl text-gray-600 w-full outline-black mr-5 border-black"
      />
      <button className="bg-[#003459]  text-white px-8 py-1 rounded-xl font-semibold">
        Subscribe Now
      </button>
    </div>
  </div>
</div>


      {/* Navigation and Social Media */}
      <div className="flex  ml-[85px] justify-between px-8 py-5 border-t border-gray-300">
        {/* Navigation Links */}
        <div className="flex space-x-10 mb-5">
            <a href="/" className="text-[#003459] hover:text-[#003459] font-bold text-lg">Home</a>
            <a href="/" className="text-[#003459] hover:text-[#003459] font-bold text-lg">Category</a>
            <a href="/" className="text-[#003459] hover:text-[#003459] font-bold text-lg">About</a>
            <a href="/" className="text-[#003459] hover:text-[#003459] font-bold text-lg">Contact</a>
        </div>

         {/* Social Media Icons */}
         <div className="flex space-x-6 mt-4 md:mt-0 mr-[100px]">
            <a href="/" className="text-[#003459] hover:text-[#003459]"><i className="fab fa-facebook"></i></a>
            <a href="/" className="text-[#003459] hover:text-[#003459]"><i className="fab fa-twitter"></i></a>
            <a href="/" className="text-[#003459] hover:text-[#003459]"><i className="fab fa-instagram"></i></a>
            <a href="/" className="text-[#003459] hover:text-[#003459]"><i className="fab fa-youtube"></i></a>
          </div>
        </div>


      {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl mx-auto ">
            {/* Left: Copyright Text */}
            <div className="flex-grow text-left">
                <p className="text-gray-500 text-sm mt-2">&copy; 2022 Monito. All rights reserved.</p>
            </div>

            {/* Center: Logo */}
            <div className="flex-grow text-center my-4 md:my-0">
                <img src={logo} alt="Logo" className="w-[80px] h-auto mx-auto" />
            </div>

            {/* Right: Terms Links */}
            <div className="flex-grow flex justify-end space-x-5 mt-2 md:mt-0">
                <a href="/" className="text-[#003459] hover:text-[#003459]">Terms of Service</a>
                <a href="/" className="text-[#003459] hover:text-[#003459]">Privacy Policy</a>
            </div>
            </div>

      </div>
   
  );
};

export default Footer;
