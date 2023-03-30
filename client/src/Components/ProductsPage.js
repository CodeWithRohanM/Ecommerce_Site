import React, { useState } from "react";
import { useAsyncError } from "react-router-dom";

const ProductsPage = () => {

    const [searchData, setSearchData] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    // const [height, setHeight] = useState(0);

    let height = false;

    const storeSearchData = () => {

    };

    const checkToShow = () => {

        setShowCategories((showCategories) => !showCategories);
        // window.alert(showCategories);

        if (!showCategories) {
            document.getElementById("categories").style.maxHeight = "100%";
            document.getElementById("categories").style.padding = "10px";

        } else {
            document.getElementById("categories").style.maxHeight = "0%";
            document.getElementById("categories").style.padding = "0px";
        }



        // () => {

        //     // if (height === false) {
        //     //     document.getElementById("categories").style.maxHeight = "0%";
        //     // }
        //     // else {
        //     //     document.getElementById("categories").style.maxHeight = "100%";
        //     // }
        //     }
    }


    return <>

        <div className="w-screen h-screen bg-yellow-300 p-12">

            <div className="flex flex-col md:flex-row w-full h-screen container mx-auto bg-red-400">

                <div className="flex flex-row gap-x-6 md:flex-col md:gap-y-12 bg-purple-400 w-full md:w-1/5 p-4">


                    <input type="text" value={searchData} onChange={storeSearchData} name="searchData" placeholder="Enter Your Product.." className="w-1/2 md:w-3/4 h-fit p-2 rounded-lg"></input>


                    <div className="flex flex-col gap-y-6 md:gap-y-8 w-3/4 hover:cursor-pointer">

                        <div className="flex flex-row justify-between bg-gray-100 items-center p-2 rounded-lg" onClick={checkToShow}>
                            <h1 className="">Categories</h1>

                            {
                                showCategories && <img src="/Images/close.png" className="w-3 h-3 md:w-4 md:h-4 transition-all ease-in-out duration-300" id="closeIcon"></img>
                            }



                        </div>

                        <div className={`flex flex-col gap-y-2 transition-max-height ease-in-out duration-700 overflow-hidden max-h-0 bg-gray-100 rounded-md shadow-inner`} id="categories">
                            <h1>All</h1>
                            <h1>Laptops</h1>
                            <h1>Mobiles</h1>
                            <h1>Accessories</h1>
                            <h1>Watches</h1>
                        </div>


                    </div>



                    <div className="flex flex-col gap-y-6 md:gap-y-8 w-3/4 hover:cursor-pointer">

                            <h1 className="p-2 bg-yellow-300 rounded-md">Companies</h1>



                            <select className="p-2 active:border-none rounded-md">
                                <option value="Samsung">Samsung</option>
                                <option value="MI">MI</option>
                                <option value="OnePlus">OnePlus</option>
                                <option value="Nokia">Nokia</option>
                                <option value="Realme">Realme</option>

                            </select>



                    </div>


                </div>



                <div className="flex flex-col gap-y-12 bg-green-200 w-4/5">
                    <div className="flex flex-row gap-x-4">
                        <h1>jds</h1>
                        <h1>Total Products</h1>
                        <h1>Sort</h1>
                    </div>

                    <div className="grid grid-cols-3 gap-x-3 bg-green-400">
                        <h1>sdb</h1>
                        <h1>hdsj</h1>
                        <h1>chzx</h1>
                        <h1>hsck</h1>
                    </div>
                </div>
            </div>
        </div>

    </>
};

export default ProductsPage;