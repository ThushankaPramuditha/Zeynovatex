import React, { useState, useEffect } from "react";

const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);

    // Fetch images from the API
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("https://monitor-backend-rust.vercel.app/api/pets");
                const data = await response.json();
                setImages(data.map(pet => ({ src: pet.image, alt: pet.pet }))); // Adjust based on the actual data structure
            } catch (error) {
                console.error("Error fetching pet images:", error);
            }
        };

        fetchImages();
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="relative w-[570px] h-[600px]">
                <img
                    src={images[currentIndex]?.src} // Ensure the image exists
                    alt={images[currentIndex]?.alt}
                    className="w-full h-full object-cover rounded-lg"
                />

                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded-md text-xl"
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                >
                    {"<"}
                </button>

                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 text-white px-3 py-1 rounded-md text-xl"
                    onClick={handleNext}
                    disabled={currentIndex === images.length - 1}
                >
                    {">"}
                </button>
            </div>

            {/* Add a label or any additional information you want */}
            <div className="text-lg font-semibold">{images[currentIndex]?.alt}</div>

            <div className="flex space-x-2">
                {images.slice(1).map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail.src}
                        alt={thumbnail.alt}
                        className="w-[110px] h-[120px] object-cover rounded-md cursor-pointer"
                        onClick={() => setCurrentIndex(index + 1)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
