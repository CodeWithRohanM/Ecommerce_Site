import React, { useState } from "react";
import HeroSection from "./HeroSection";
import MiddleSection from "./MiddleSection";


const HomePage = () => {

    window.scroll({ top: 0, left: 0, behavior: "smooth" });


    return <>

        <div className="flex flex-col gap-y-8 h-fit">

            <section id="heroSection" className="border-b border-black shadow-inner">

                <HeroSection pageName={"Welcome To Twitter Store"} pageImage="/Images/laptop.png" buttonName="Shop Now" />
            </section>

            <section id="heroSections" className="w-screen h-screen border-b border-black">
                <MiddleSection />
            </section>
        </div>


    </>
};

export default HomePage;