import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCartNumber, getCartStatus } from "../Reducers/userReducer";


const HeroSection = (props) => {

    const getCurrentCartNumber = useSelector((state) => state.rootSlice.cartNumber);
    const getCurrentCartStatus = useSelector((state) => state.rootSlice.cartStatus);

    const dispatch = useDispatch();


    const updateCartNumber = async () => {
        try {
            dispatch(getCartStatus(true));
            dispatch(getCartNumber(getCurrentCartNumber + 1));

        } catch (err) {
            console.log(err);
        }


    }



    return <>

        <div className="w-full h-full grid grid-rows-2 md:grid-rows-none md:grid-cols-2 container mx-auto md:mt-20">
            <div className="flex flex-col gap-y-4 container mx-auto w-3/4 md:w-full items-center justify-center md:justify-center md:items-start">

                {/* <h1>Cart Number = {getCurrentCartNumber}</h1> */}
                <h1>Cart Number = {getCurrentCartNumber}</h1>
                <h1>Cart Status = {getCurrentCartStatus.toString()}</h1>

                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">{props.pageName}</h1>

                <h1 className="text-center md:text-left md:w-11/12 text-md md:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquam ex consequatur? Odit mollitia corporis necessitatibus numquam perferendis beatae doloremque ad eos at rem aperiam, ex placeat, sit quo esse.</h1>

                <button type="button" className="mt-4 px-4 md:px-12 py-3 text-white font-bold antialiased text-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-lg hover:bg-blue-600 uppercase" onClick={updateCartNumber}>{props.buttonName}</button>

            </div>


            <div className=" flex flex-col container mx-auto w-3/4 md:w-full items-center justify-center md:justify-center md:items-end">
                <img src={props.pageImage} className="w-3/4 h-3/4 md:w-3/4 md:h-full rounded-lg"></img>
            </div>

        </div>

    </>
};

export default HeroSection;