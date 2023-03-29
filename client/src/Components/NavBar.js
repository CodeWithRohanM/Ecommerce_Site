import React from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import tw from "tailwind-styled-components";

const NavBar = () => {


    return <>
    <div className="w-screen  bg-blue-600">
        <div className="flex flex-col gap-y-4 items-center md:flex-row md:justify-between text-white font-bold antialiased tracking-widest py-3  md:py-4 container mx-auto ">


            <a href="/"><img src="/Images/twitter.png" alt="logoIcon" className="w-8 h-8 md:h-10 md:w-10 hover:cursor-pointer hover:scale-110 transition ease-in-out duration-200"></img></a>
            <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-6 items-center text-md md:text-lg">
                <NavLink to="/" style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                })}><h1 className="hover:cursor-pointer hover:text-yellow-300">Home</h1></NavLink>

                <NavLink to="/about" style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                })}><h1 className="hover:cursor-pointer hover:text-yellow-300">About</h1></NavLink>

                <NavLink to="/products" style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                })}><h1 className="hover:cursor-pointer hover:text-yellow-300">Products</h1></NavLink>

                <NavLink to="/contact" style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                })}><h1 className=" hover:cursor-pointer hover:text-yellow-300">Contact</h1></NavLink>

                <button type="button" className="bg-blue-400 text-white rounded-lg text-center px-4 py-2 hover:bg-blue-500 hover:cursor-pointer hover:text-cyan-200">LogIn</button>


                <img src="/Images/carts.png" className="w-8 h-8 md:w-8 md:h-8 hover:cursor-pointer hover:-translate-y-1 transition ease-in-out duration-200"></img>
            </div>
        </div>
        </div>

    </>
};

export default NavBar;