import React from "react";

const HeroSection = (props) => {

    return <>

        <div className="w-full h-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2 bg-yellow-300 container mx-auto md:mt-20">
            <div className="bg-red-400 flex flex-col gap-y-4 container mx-auto w-3/4 md:w-full items-center justify-center md:justify-center md:items-start">

                <h1 className="bg-yellow-300 text-4xl md:text-5xl font-bold text-center md:text-left">{props.pageName}</h1>

                <h1 className="bg-yellow-300 text-center md:text-left md:w-11/12 text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam ex consequatur? Odit mollitia corporis necessitatibus numquam perferendis beatae doloremque ad eos at rem aperiam, ex placeat, sit quo esse.</h1>

                <button type="button" className="mt-4 px-4 md:px-12 py-3 text-white font-bold antialiased text-xl bg-blue-700 rounded-lg hover:bg-blue-600 uppercase">{props.buttonName}</button>

            </div>


            <div className="bg-blue-700 flex flex-col container mx-auto w-3/4 md:w-full items-center justify-center md:justify-center md:items-start">
                <img src={props.pageImage} className="w-3/4 h-3/4 md:w-3/4 md:h-full"></img>
            </div>

        </div>

    </>
};

export default HeroSection;