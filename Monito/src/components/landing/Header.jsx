import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import vnd from "../../assets/images/Frame 48.png";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  // Track scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      style={{ height: "auto" }} 
    >
      <div className="flex justify-start items-center w-full py-2">
          {/* Logo at the top left corner */}
          <img
                src={logo}
                alt="Logo"
                className="absolute top-5 left-24 w-24 h-auto z-10" // Adjust size as needed
            />
        <div className="relative w-[350px] h-auto overflow-hidden">
        </div>

        <div
          className="container flex justify-between items-center"
          style={{ marginLeft: "20px" }}
        >
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 text-[#003459] font-bold ml-5 gap-10">
            <a href="/" className="hover:text-[#003459]">
              Home
            </a>
            <a href="/category" className="hover:text-[#003459]">
              Category
            </a>
            <a href="#about" className="hover:text-[#003459]">
              About
            </a>
            <a href="/product" className="hover:text-[#003459]">
              Contact
            </a>
          </nav>

          {/* Search Bar */}
          <div className="relative hidden md:flex items-center ">
            <input
              type="text"
              placeholder="Search something here!"
              className="py-2 px-4 rounded-full bg-gray-100 text-gray-700 focus:outline-none"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4 mr-[150px]" >
            <button className="bg-[#003459] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Join the community
            </button>
            <button className="bg-gray-100 text-[#003459] px-4 py-2 rounded-full hover:bg-gray-200 transition">
              <img src={vnd} alt="VND" className="w-15 h-7" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
