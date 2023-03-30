import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="bg-white">
            <div className="pb-16">
                <div className="flex flex-col items-center">
                    <h2 className="text-[#34a8eb] text-xl font-bold mb-2 mt-16">CONTACT</h2>
                    <p className="text-lg font-bold">Get in touch with me</p>
                </div>
                <form className="px-6 flex flex-col mt-6 max-w-xl mx-auto">
                        <label className="text-lg font-bold">Name</label>
                        <input className="border-2 w-full border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                        <label className="text-lg font-bold mt-3">Email</label>
                        <input className="border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                        <label className="text-lg font-bold mt-3">Message</label>
                        <textarea className="border-2 border-gray-300 rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#34a8eb]" type="text" />
                </form>    
            </div>
        </div>
    )
}

export default Contact;