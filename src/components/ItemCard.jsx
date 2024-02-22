import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, incrementQty, decrementQty } from '../slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


const ItemCard = ({id, name, price, img, qty}) => {

  const dispatch = useDispatch();


  return (
    <div className='flex gap-2 shadow-lg rounded-lg p-2 mb-3' >

        <MdDelete onClick={()=> {
          dispatch(removeFromCart({id, name, price, qty, img}));
          toast(`${name} Removed`, {
            icon: '👋',
          });
      }}
        className='absolute right-9 text-gray-600 cursor-pointer' />
      

        <img src={img} alt="" className='w-[60px] h-[60px]' />

        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
            <div className='flex justify-center'>
            <span className='text-green-500 font-bold'>₹ {price}</span>
            <div className='flex justify-center gap-2 items-center absolute right-9'>
            <FaMinus 
            onClick={()=>
              qty > 1 ? dispatch(decrementQty({id})) : (qty = 0)}
            className='border-2 border-gray-600 text-gray-600 text-lg hover:text-white hover:bg-green-500 hover:border-none  rounded-md p-1 transition-all ease-linear cursor-pointer' />
            <span>{qty}</span>
            <FaPlus 
            onClick={()=>
              qty >= 1 ? dispatch(incrementQty({id})) : qty = 0}
              
            className='border-2 border-gray-600 text-gray-600 text-lg hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 transition-all ease-linear cursor-pointer ' />
           
            </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCard