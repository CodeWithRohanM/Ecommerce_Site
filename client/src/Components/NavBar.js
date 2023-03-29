import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import tw from "tailwind-styled-components";
import { useSelector, useDispatch } from "react-redux";
import { cartNumber, showCartNumber } from "../Actions/userActions";


const NavBar = () => {
    const getCurrentCartNumber = useSelector((state) => state.userReducer.cartNumber);
    const getCartStatus = useSelector((state) => state.userReducer.cartNumberStatus);

    const dispatch = useDispatch();

    const [iconImage, setIconImage] = useState("/Images/hamburger.png");
    const [openDoor, setOpenDoor] = useState(false);

    const changeIconImage = () => {
        try {
            setIconImage((iconImage) => iconImage === "/Images/hamburger.png" ? "/Images/close.png" : "/Images/hamburger.png");
            setOpenDoor(!openDoor);
            let getMenuDisplay = document.getElementById("menuContent").style.display;

            document.getElementById("menuContent").style.display = getMenuDisplay === "flex" ? "hidden" : "flex";

        } catch (err) {
            console.log(err);
        }
    }


    return <>


        <div className="w-screen  bg-blue-600">

            <div className="flex flex-col gap-y-4 items-center md:flex-row md:justify-between text-white font-bold antialiased tracking-widest p-3 md:py-4 container mx-auto md:p-0">



                <a href="/"><img src={"/Images/twitter.png"} alt="logoIcon" className="w-8 h-8 md:h-10 md:w-10 hover:cursor-pointer hover:scale-110 transition ease-in-out duration-200"></img></a>


                {/* <div className="flex flex-col gap-y-6 bg-yellow-300 w-full items-center md:items-end">
                    <div className="w-full">
                        <div className="flex justify-end w-full bg-red-600">
                            <img src={iconImage} className="md:hidden w-10 h-10 md:w-8 md:h-8 hover:cursor-pointer" onClick={changeIconImage}></img>
                        </div> */}



                <div className="flex flex-col gap-y-3 md:flex-row md:gap-x-6 items-center text-md md:text-lg bg-blue-400 px-4 py-2 rounded-lg w-fit" id="menuContent">
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


                    <NavLink to="/cartPage">
                        <div>
                            <img src="/Images/carts.png" className="w-8 h-8 md:w-8 md:h-8 hover:cursor-pointer hover:-translate-y-1 transition ease-in-out duration-200 relative" onClick={() => dispatch(showCartNumber(true))}></img>

                            {
                                getCartStatus && <span className="absolute -mt-10 ml-6 bg-red-600 rounded-full px-1 text-sm text-center font-bold">{getCurrentCartNumber}</span>
                            }
                        </div>

                    </NavLink>

                </div>


            </div>

        </div>

    </>
};

export default NavBar;