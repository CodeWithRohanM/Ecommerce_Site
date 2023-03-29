import React from "react";

const MiddleSection = () => {

    return <>
        <div className="w-full h-full bg-yellow-300 grid grid-rows-2 grid-cols-0">

            <div className="bg-red-400 flex flex-col md:flex-row md:gap-x-8 container mx-auto md:w-3/4 gap-y-3 items-center">

                <div className="bg-gray-300 p-4 rounded-lg flex flex-col justify-evenly items-center h-1/3 md:h-1/2 md:w-1/3">
                    <img src="/Images/fast.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                    <h1 className="text-xl md:text-2xl">Super Fast & Free Delievery</h1>
                </div>

                <div className="flex flex-row md:flex-col justify-evenly md:justify-between md:gap-y-6 bg-yellow-300 rounded-lg h-1/3 md:h-1/2 md:w-1/3 items-center w-full gap-x-4">
                    <div className="flex flex-row justify-evenly bg-gray-300 w-1/2 md:w-full md:h-1/2 py-3 rounded-lg items-center">
                        <img src="/Images/encrypted.png" className="w-8 h-8 md:w-12 md:h-12"></img>
                        <h1 className="text-md md:text-2xl">Non-Contact Shipping</h1>
                    </div>

                    <div className="flex flex-row justify-evenly bg-gray-300 w-1/2 md:w-full md:h-1/2 py-3 rounded-lg items-center">
                        <img src="/Images/carts.png" className="w-8 h-8 md:w-12 md:h-12"></img>
                        <h1 className="text-md md:text-2xl">Money Back Guarantee</h1>
                    </div>
                </div>

                <div className="bg-gray-300 h-1/3 md:h-1/2 md:w-1/3 p-4 rounded-lg flex flex-col justify-evenly items-center">
                    <img src="/Images/cyber.png" className="w-16 h-16 md:w-20 md:h-20"></img>
                    <h1 className="text-xl md:text-2xl text-center">Super Secure Payment System</h1>
                </div>



            </div>

            <div className="bg-purple-400 mt-12">

                <div className="flex flex-col gap-y-10  bg-red-500 items-center h-full w-full">

                    <h1 className="text-2xl">Trusted By 1000+ Companies</h1>

                    <div className="flex flex-row justify-center container mx-auto h-1/2">

                    <div className="grid grid-cols-3 gap-x-16 gap-y-10 md:grid-cols-5 md:gap-x-40">

                        <img src="/Images/instagram.png" className="w-16 h-16 md:w-24 md:h-24"></img>
                        <img src="/Images/whatsapp.png" className="w-16 h-16 md:w-24 md:h-24"></img>
                        <img src="/Images/facebook.png" className="w-16 h-16 md:w-24 md:h-24"></img>
                        <img src="/Images/google.png" className="w-16 h-16 md:w-24 md:h-24"></img>
                        <img src="/Images/gmail.png" className="w-16 h-16 md:w-24 md:h-24"></img>

                    </div>
                    </div>
                </div>

            </div>


        </div>

    </>
};

export default MiddleSection;