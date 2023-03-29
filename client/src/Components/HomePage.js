import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartNumber, showCartNumber } from "../Actions/userActions";
import HeroSection from "./HeroSection";
import MiddleSection from "./MiddleSection";

const HomePage = () => {


    const getCurrentCartNumber = useSelector((state) => state.userReducer.cartNumber);
    const getCartStatus = useSelector((state) => state.userReducer.cartNumberStatus);


    const dispatch = useDispatch();
    const [currentCartNumber, setCurrentCartNumber] = useState(getCurrentCartNumber);



    const updateCartNumber = async () => {
        try {
            await setCurrentCartNumber(currentCartNumber + 1);
            dispatch(showCartNumber(true));
            dispatch(cartNumber(getCurrentCartNumber + 1));

        } catch (err) {
            console.log(err);
        }

    }



    return <>

        {/* <div className="bg-yellow-300 flex flex-col items-center container mx-auto w-full h-full">
            <h1 className=" w-full text-center">Home Page..</h1>
            <button type="button" className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500" onClick={updateCartNumber}>Add To Cart</button>
            <h1>Cart Number = {getCurrentCartNumber}</h1>
            <h1>Status = {getCartStatus.toString()}</h1>

        </div> */}

        <div className="flex flex-col gap-y-8">

        <section id="heroSection">

            <HeroSection pageName={"Welcome To Twitter Store"} pageImage="/Images/storeIcon.png" buttonName="Shop Now" />
        </section>

        <section id="heroSections" className="w-screen h-screen">

            <MiddleSection/>
        </section>
        </div>


    </>
};

export default HomePage;