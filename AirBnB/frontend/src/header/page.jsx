import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

function Header() {

    return(
      <header className="p-4 flex justify-between">
        <a href='' className='flex items-center gap-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 -rotate-90">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        <span className="font-bold text-xl">AirBnb</span>
        </a>
        <div className="flex text-semibold gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200">
            <div>Anywhere</div>
            <div className="border border-l border-gray-300"></div>
            <div>Any Week</div>
            <div className="border border-l border-gray-300"></div>
            <div>Add Guests</div>
            <button className="bg-green-500 text-black p-1 rounded-full">
            <FaSearch />
            </button>
        </div>
        <Link to={"/login"} className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200">
        <GiHamburgerMenu />
        <div className="bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden">
        <CgProfile />
        </div>
        </Link>
      </header>
    );
  }
  
  export default Header
  