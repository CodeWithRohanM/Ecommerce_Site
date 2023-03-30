import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';


const MiddleSection = () => {

    return <>
        <div className="w-full h-full grid grid-rows-2 grid-cols-0">

            <div className="flex flex-col md:flex-row md:gap-x-12 container mx-auto md:w-3/4 gap-y-3 items-center border-b border-black">

                <div className="bg-gray-100 p-4 rounded-xl flex flex-col justify-evenly items-center h-1/3 md:h-1/2 md:w-1/3 shadow-2xl">
                    <img src="/Images/fast.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                    <h1 className="text-xl md:text-xl">Super Fast & Free Delievery</h1>
                </div>

                <div className="flex flex-row md:flex-col justify-evenly md:justify-between md:gap-y-6 rounded-xl h-1/3 md:h-1/2 md:w-1/3 items-center w-full gap-x-4">
                    <div className="flex flex-row justify-evenly bg-gray-100 w-1/2 md:w-full md:h-1/2 py-3 rounded-xl items-center shadow-xl">
                        <img src="/Images/encrypted.png" className="w-8 h-8 md:w-12 md:h-12"></img>
                        <h1 className="text-md md:text-xl">Non-Contact Shipping</h1>
                    </div>

                    <div className="flex flex-row justify-evenly bg-gray-100 w-1/2 md:w-full md:h-1/2 py-3 rounded-xl items-center shadow-xl">
                        <img src="/Images/cashback.png" className="w-8 h-8 md:w-12 md:h-12"></img>
                        <h1 className="text-md md:text-xl">Money Back Guarantee</h1>
                    </div>
                </div>

                <div className="bg-gray-100 h-1/3 md:h-1/2 md:w-1/3 p-4 rounded-xl flex flex-col justify-evenly items-center shadow-2xl">
                    <img src="/Images/cyber.png" className="w-16 h-16 md:w-16 md:h-16"></img>
                    <h1 className="text-xl md:text-xl text-center">Super Secure Payment System</h1>
                </div>
            </div>



            <div className="pt-12">

                <div className="flex flex-col gap-y-10 items-center h-full w-full bg-gray-100 container mx-auto md:h-3/4 rounded-lg justify-center">

                    <h1 className="text-2xl border-b border-black pb-2 w-1/2 text-center">Trusted By 1000+ Companies</h1>


                    <div className="flex flex-row justify-center container mx-auto h-1/2">

                        <div className="grid grid-cols-3 gap-x-16 gap-y-10 md:grid-cols-5 md:gap-x-40">
                            
                            <img src="/Images/instagram.png" className="w-16 h-16 md:w-24 md:h-24 rounded-3xl shadow-2xl"></img>
                            <img src="/Images/whatsapp.png" className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-2xl"></img>
                            <img src="/Images/facebook.png" className="w-16 h-16 md:w-24 md:h-24 shadow-2xl rounded-3xl"></img>
                            <img src="/Images/google.png" className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-2xl"></img>
                            <img src="/Images/gmail.png" className="w-16 h-16 md:w-24 md:h-24 rounded-full shadow-2xl"></img>

                        </div>
                    </div>
                </div>

            </div>


        </div>

    </>
};

export default MiddleSection;