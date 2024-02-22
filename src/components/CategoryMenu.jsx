import React, {useEffect, useState} from 'react'
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../slices/CategorySlice';



const CategoryMenu = () => {

  const [categories, setCategories] = useState([]);

 

  const listUniqueCategories = () => {
      const uniqueCategories = [
        ...new Set(FoodData.map((food)=>food.category)),
      ];

      setCategories(uniqueCategories);
      console.log(uniqueCategories); ['Lunch', 'Breakfast','Dinner','Snacks' ]
    };

      useEffect(()=>{
        listUniqueCategories();
      },[]);
  
      const dispatch = useDispatch();

      const selectedCategory = useSelector((state)=>state.category.category);

  return (
    <div>
        <h3 className='text-xl font-semibold mx-5'>What's on your mind?</h3>
   
    <div className='my-5 mx-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden font-bold'>
        
    <button 
            onClick={()=>dispatch(setCategory("All"))}
            className={` px-3 py-2   rounded-lg bg-gray-400 hover:bg-green-500 hover:text-white
            ${selectedCategory === "All" && "bg-green-500 text-white"}`}>All</button>

        {
        categories.map((category, index)=> {
          return(
            <button 
            onClick={()=>dispatch(setCategory(category))}
            key={index} className={`px-3 py-2  rounded-lg bg-gray-400 hover:bg-green-500 hover:text-white 
            ${selectedCategory === category && "bg-green-500 text-white"}`}>{category}</button>

          )
        }
        
        )}
    </div>
    </div>
  )
}

export default CategoryMenu