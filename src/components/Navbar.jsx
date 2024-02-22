import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../slices/SearchSlice";


const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        
      </div>
      <div>
      <h1 className="text-5xl font-bold text-center mt-10 text-sky-500 animate-bounce">Eat-Yummy</h1>
      </div>
      <div>
        <input
          type="search"
          placeholder="search here"
          id=""
          name="name"
          autoComplete="off"

          onChange={(e)=>dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm w-full rounded-lg outline-none lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
