import React, { useState } from "react";

const ContactPage = () => {

    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        feedback: "",
    });

    const storeUserData = (event) => {
        const getValue = event.target.value;
        const getName = event.target.name;

        setUserData((prevValue) => {
            return {
                ...prevValue,
                [getName]: getValue,
            }
        })

    };

    const displayUserData = () => {
        setUserData({
            firstName: "",
            lastName: "",
            email: "",
            feedback: "",
        });
    }

    return <>

        <div className="w-screen h-screen container mx-auto p-12">

            <div className="flex flex-col w-fulll h-full items-center gap-y-10">
                <h1 className="text-3xl md:text-4xl font-bold">Feel Free To Contatc Us!!</h1>

                <div className="w-full h-1/2 bg-purple-400 rounded-lg flex justify-center">
                    <h1>hsdkjcz</h1>
                </div>

                <form className="flex flex-col w-3/4 md:w-1/2 gap-y-6">
                    <input type="text" value={userData.firstName} onChange={storeUserData} name="firstName" placeholder="Enter Your First Name.." className="px-4 py-1 md:py-2 md:text-xl text-gray-500 rounded-lg active:border-none border border-gray-500 bg-transparent"></input>

                    <input type="text" value={userData.lastName} onChange={storeUserData} name="lastName" placeholder="Enter Your Last Name.." className="px-4 py-1 md:py-2 border border-gray-500 rounded-lg bg-transparent md:text-xl active:border-none text-gray-500"></input>

                    <input type="text" value={userData.email} onChange={storeUserData} name="email" placeholder="Enter Your Email.." className="px-4 py-1 md:py-2 md:text-xl text-gray-500 border border-gray-500 rounded-lg bg-transparent active:border-none"></input>

                    <textarea value={userData.feedback} name="feedback" onChange={storeUserData} placeholder="Please Write Your Concern.." className="bg-transparent rounded-lg px-4 py-1 md:py-2 text-gray-500 md:text-xl border border-gray-500 active:border-none overflow-scroll"></textarea>


                    <div className="flex w-full justify-center">

                        <button type="button" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white w-1/2 uppercase font-bold" onClick={displayUserData}>Submit</button>
                    </div>

                </form>



            </div>

        </div>



    </>
};

export default ContactPage;