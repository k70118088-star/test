import React from "react";

const ProductCard = ({ prize, text, image }) => {

  const handleAddToCart = () => {
    
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
   
    const newProduct = {
      prize,
      text,
      image,
    };

   
    const updatedCart = [...existingCart, newProduct];

       localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Added to Cart:", newProduct);
  };

  return (
    <div className="w-full max-w-91 lg:w-90  mt-12.5 mx-auto">
      
      <div className="relative group bg-[#F5F5F5] p-4 sm:p-6 cursor-pointer overflow-hidden">
        
        <div className="flex justify-between items-center relative z-10">
          <h1 className="py-2 px-4 sm:px-5 bg-white rounded-full font-medium text-sm sm:text-16">
            {prize}
          </h1>

          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z"
                fill="#01C6B5"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8 sm:mt-10 relative z-10">
          <img
            src={image}
            alt={text}
            className="object-contain h-60 sm:h-70 md:h-82.75 w-full"
          />
        </div>

        <div
          className="absolute inset-0 z-20 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 
          flex items-center justify-center"
        >
          <button
            onClick={handleAddToCart}
            className="bg-teal-custom  cursor-pointer text-white px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-medium"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-center text-lg sm:text-2xl font-normal">
          {text}
        </h2>
      </div>

    </div>
  );
};

export default ProductCard;
