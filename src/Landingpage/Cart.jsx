import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const updated = storedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1 || 2,
      price: Number(item.price), 
    }));

    setCartItems(updated);
  }, []);

  const updateQuantity = (index, type) => {
    const updatedCart = [...cartItems];

    if (type === "increase") {
      updatedCart[index].quantity += 1;
    } else if (type === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="max-w-275 mx-auto px-4 py-12">
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        <h1 className="underline text-gray-600">
         <Link to={"/"}>Continue Shopping</Link>
        </h1>
      </div>

      <div className="grid grid-cols-3 bg-gray-200 p-4 font-medium text-gray-700">
        <p>Product</p>
        <p className="text-center">Quantity</p>
        <p className="text-right">Total</p>
      </div>

      {cartItems.map((item, index) => {
        const total = (item.price * item.quantity).toFixed(2);

        return (
          <div
            key={index}
            className="grid grid-cols-3 items-center border-b py-6"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-medium">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  €{item.price.toFixed(2)}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <button
                onClick={() => updateQuantity(index, "decrease")} className="w-10 h-10 bg-gray-700 text-white text-lg">
                -
              </button>

              <span className="px-4">{item.quantity}</span>

              <button
                onClick={() => updateQuantity(index, "increase")}className="w-10 h-10 bg-[#01C6B5] text-white text-lg">
                +
              </button>

              <button
                onClick={() => removeItem(index)}className="ml-4 text-gray-500">
                <FaTrash />
              </button>
            </div>
            <div className="text-right font-medium">
              €{total}
            </div>
          </div>
        );
      })}

      <div className="flex justify-end mt-10">
        <div className="w-full max-w-sm">
          <div className="flex justify-between font-medium mb-2">
            <span>Estimated Total</span>
            <span>€{getTotalPrice().toFixed(2)}</span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            Taxes, discounts and shipping calculated at checkout.
          </p>

          <button className="w-full bg-[#01C6B5] text-white py-4 text-lg font-medium">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
