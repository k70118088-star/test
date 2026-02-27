import React from "react";

const CategoriesCard = ({ image, title, price }) => {

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newProduct = { image,  title,  price,};    
    const updatedCart = [...existingCart, newProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Added To Cart:", newProduct);
  };

  return (
    <div className="w-66.75 h-75.75 cursor-pointer bg-white shadow-[0_0_51px_rgba(0,0,0,0.08)]">
      <div className="relative group bg-[#EFEFEF] h-62.75 flex items-center justify-center overflow-hidden">
        <div className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center z-20 cursor-pointer">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.00116 13.8582L8.91204 13.9473L8.814 13.8582C4.58079 10.0171 1.78241 7.4772 1.78241 4.90162C1.78241 3.11921 3.11921 1.78241 4.90162 1.78241C6.27407 1.78241 7.61088 2.67361 8.08322 3.88565H9.74086C10.2132 2.67361 11.55 1.78241 12.9225 1.78241C14.7049 1.78241 16.0417 3.11921 16.0417 4.90162C16.0417 7.4772 13.2433 10.0171 9.00116 13.8582ZM12.9225 0C11.3718 0 9.88345 0.721875 8.91204 1.8537C7.94062 0.721875 6.45231 0 4.90162 0C2.15671 0 0 2.1478 0 4.90162C0 8.26146 3.03009 11.0153 7.61979 15.1772L8.91204 16.3536L10.2043 15.1772C14.794 11.0153 17.8241 8.26146 17.8241 4.90162C17.8241 2.1478 15.6674 0 12.9225 0Z"
              fill="#01C6B5"/>
          </svg>
        </div>
        <img src={image} alt={title} className="object-contain z-10" />
        <div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center z-20">
          <button onClick={handleAddToCart} className="bg-[#01C6B5] text-white px-8 py-3 text-lg font-medium">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-4">
        <h2 className="text-sm font-semibold text-[#414143]">{title}</h2>
        <p className="text-sm font-normal text-black">{price}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
