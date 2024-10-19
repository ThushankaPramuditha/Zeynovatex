const PetDetailsForm = () => {
    return (
      <div className="space-y-4 p-6 bg-white shadow-lg rounded-lg w-[90%]">
        <h2 className="text-3xl text-[#062C59] font-bold">Shiba Inu Sepia</h2>
        <p className="text-xl text-[#062C59] font-medium">34.000.000 VND</p>
        <div className="flex flex-col md:flex-row gap-4 mr-[100px]">
            {/* Explore Now Button */}
            <button className="bg-[#062C59] border-2 border-white text-white font-medium font-bold py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-[#062C59] hover:text-white transition">
              <span>Contact Us</span>
            </button>
            <button className=" flex bg-white text-[#062C59] font-small font-semibold py-3 px-6 border-2 border-[#062C59] rounded-full hover:bg-white transition">
               {/* svg for chatmessage */}
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 3h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10l-2 2"
                    />
                </svg>
             <span className="ml-5 mt-[-1px]">Chat with Monito</span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-4">
                <p><span className="font-bold">SKU</span> <span className="ml-[300px]">: #1000078</span></p>
                <p><span className="font-bold">Gender</span> <span className="ml-[275px]">: Female</span></p>
                <p><span className="font-bold">Age</span> <span className="ml-[300px]">: 2 Months</span></p>
                <p><span className="font-bold">Size</span> <span className="ml-[300px]">: Small</span></p>
                <p><span className="font-bold">Color</span> <span className="ml-[290px]">: Apricot & Tan</span></p>
                <p><span className="font-bold">Vaccinated</span> <span className="ml-[248px]">: Yes</span></p>
                <p><span className="font-bold">Dewormed</span> <span className="ml-[248px]">: Yes</span></p>
                <p><span className="font-bold">Cert</span> <span className="ml-[298px]">: Yes (MKA)</span></p>
                <p><span className="font-bold">Microchip</span> <span className="ml-[255px]">: Yes</span></p>
                <p><span className="font-bold">Location</span> <span className="ml-[264px]">: Vietnam</span></p>
                <p><span className="font-bold">Published Date</span> <span className="ml-[215px]">: 12-Oct-2022</span></p>

                {/* Additional Information aligned with previous rows */}
                <p className="flex">
                    <span className="font-bold">Additional Information</span> 
                    <span className="ml-[160px]">
                    : Pure breed Shih Tzu. <br />
                    Good body structure. <br />
                    With MKA cert and Microchip, <br />
                    Father from champion lineage.
                    </span>
                </p>
                </div>



      </div>
    );
  };
  
    export default PetDetailsForm;