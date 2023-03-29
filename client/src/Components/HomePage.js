import React, { useState } from "react";
import HeroSection from "./HeroSection";
import MiddleSection from "./MiddleSection";

const HomePage = () => {

    return <>

        {/* <div className="bg-yellow-300 flex flex-col items-center container mx-auto w-full h-full">
            <h1 className=" w-full text-center">Home Page..</h1>
            <button type="button" className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500" onClick={updateCartNumber}>Add To Cart</button>
            <h1>Cart Number = {getCurrentCartNumber}</h1>
            <h1>Status = {getCartStatus.toString()}</h1>

        </div> */}

        <div className="flex flex-col gap-y-8 h-fit">

            <section id="heroSection" className="border-b border-black shadow-inner">
                {/* <h1>Status = {getCartStatus.toString()}</h1> */}

                <HeroSection pageName={"Welcome To Twitter Store"} pageImage="/Images/laptop.png" buttonName="Shop Now" />
            </section>

            <section id="heroSections" className="w-screen h-screen border-b border-black">

                <MiddleSection />
            </section>
        </div>


    </>
};

export default HomePage;