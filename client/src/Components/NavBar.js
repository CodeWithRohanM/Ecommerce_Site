import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    return <>
        <div className="flex flex-col gap-y-4 items-center md:flex-row md:justify-between bg-blue-600 text-white font-bold antialiased tracking-widest py-3 md:px-8 md:py-4">


            <a href="/"><img src="/Images/twitter.png" className="w-8 h-8 md:h-10 md:w-10 hover:cursor-pointer"></img></a>
            <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-6 items-center text-md md:text-lg">
                <Link to="/"><h1 className="hover:cursor-pointer">Home</h1></Link>
                <Link to="/about"><h1 className="hover:cursor-pointer">About</h1></Link>
                <Link to="/products"><h1 className="hover:cursor-pointer">Products</h1></Link>
                <Link to="/contact"><h1 className=" hover:cursor-pointer">Contact</h1></Link>

                <button type="button" className="bg-blue-400 text-white rounded-lg text-center px-4 py-2 hover:bg-blue-500 hover:cursor-pointer">LogIn</button>

                <img src="/Images/carts.png" className="w-8 h-8 md:w-8 md:h-8 hover:cursor-pointer"></img>
            </div>
        </div>

    </>
};

export default NavBar;