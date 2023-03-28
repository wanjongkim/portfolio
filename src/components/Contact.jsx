import React from "react";

const Contact = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col items-center pb-16 border ">
                <h2 className="text-[#34a8eb] text-xl font-bold mb-2 mt-16">CONTACT</h2>
                <p className="text-lg font-bold">Get in touch with me</p>
                <form className="w-full px-6  content-center">
                    <div className="flex flex-col mt-6 w-full items-center sm:w-10/12 border">
                        <label className="text-lg font-bold">Name</label>
                        <input className="border-2 w-full border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                        <label className="text-lg font-bold">Email</label>
                        <input className="border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                        <label className="text-lg font-bold">Message</label>
                        <textarea className="border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                        
                    </div>       
                </form>    
            </div>
        </div>
    )
}

export default Contact;