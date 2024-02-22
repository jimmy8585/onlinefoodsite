import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slices/CartSlice';

const FoodCard = ({id, name, price, desc,img, rating, handleToast}) => {

  const dispatch = useDispatch();
  
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg'>
        <img src={img} alt="" 
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out gap-2'/>
        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='bg-green-500'>₹ {price}</span>
        </div>
        <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
            <span className='flex items-center'>
            <FaStar className='mr-1 text-yellow-400'/> {rating}
            </span>
            <button onClick={()=>{
            dispatch(addToCart({id,name,price,rating,img,qty:1})
            );
            handleToast(name);
          }}
            className='p-1 bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard