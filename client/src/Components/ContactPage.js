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
                <h1 className="text-3xl md:text-4xl font-bold border-b border-black pb-2 w-3/4 text-center">Feel Free To Contatc Us!!</h1>

                <div className="w-full h-1/2 rounded-lg flex justify-center shadow-2xl">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.9283656743!2d73.79292695401237!3d18.52476632647583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680150854653!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{
                            border: "0",
                            borderRadius: "15px",
                        }}
                        allowFullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <form
                    className="flex flex-col w-3/4 md:w-1/2 gap-y-6 h-fit"
                    action="https://formspree.io/f/xwkjrvga"
                    method="POST">
                    <input type="text" name="firstName" placeholder="Enter Your First Name.." className="px-4 py-1 md:py-2 md:text-xl text-gray-500 rounded-lg active:border-none border border-gray-500 bg-transparent"></input>

                    <input type="text" name="lastName" placeholder="Enter Your Last Name.." className="px-4 py-1 md:py-2 border border-gray-500 rounded-lg bg-transparent md:text-xl active:border-none text-gray-500"></input>

                    <input type="text" name="email" placeholder="Enter Your Email.." className="px-4 py-1 md:py-2 md:text-xl text-gray-500 border border-gray-500 rounded-lg bg-transparent active:border-none"></input>

                    <textarea name="feedback" placeholder="Please Write Your Concern.." className="bg-transparent rounded-lg px-4 py-1 md:py-2 text-gray-500 md:text-xl border border-gray-500 active:border-none overflow-scroll"></textarea>


                    <div className="flex w-full justify-center">

                        <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-white w-1/2 uppercase font-bold">Submit</button>
                    </div>

                </form>



            </div>

        </div>



    </>
};

export default ContactPage;