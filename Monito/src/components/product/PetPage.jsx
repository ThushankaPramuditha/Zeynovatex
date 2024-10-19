import React from "react";
import ImageGallery from "../product/ImageGallery";
import PetDetailsForm from "../product/PetDetailsForm";
import Custumer from "./customer";
import PetMore from "./PetMore";

const PetPage = () => {
    return (
      <div className="flex-col max-w-full overflow-hidden mt-[80px]">
        <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="md:w-1/2">
            <ImageGallery />
            </div>
            <div className="md:w-1/2">
            <PetDetailsForm />
            </div>
        </div >
        <div className="mt-10 ">
        <Custumer />
        </div>
        <PetMore />
      </div>
       
      
     
    );
};

export default PetPage;
