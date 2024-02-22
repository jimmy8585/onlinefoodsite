import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  
  const totalQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty, 0)

  const totalPrice = cartItems.reduce((total, item)=> total + item.qty * item.price, 0)

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[24vw] p-2 bg-white h-full ${
          activeCart ? " translate-x-0" : "translate-x-full"
        } trasition-all duration-500 z-50 `}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-s-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? cartItems.map((food) => {
          return (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        }) : <h2 className="text-center font-bold text-xl text-gray-800">Your Cart Is Empty</h2>}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          <hr className="my-2 w-[90vw] lg:w-[18vw]" />
          <button 
          onClick={()=>navigate("/success")}
          className="bg-green-500 text-white font-bold px-3 py-2 rounded-xl w-[90vw] lg:w-[18vw] mb-5">
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`text-5xl rounded-full bg-white shadow-md p-3 fixed bottom-4 right-4
        ${totalQty > 0 && "animate-bounce delay-500 transition-all"}
        " `}
      />
    </>
  );
};

export default Cart;
