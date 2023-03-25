import React from "react";

const Nav = () => {

    return (
        <div className="fixed w-screen bg-slate-800 text-slate-300">
            <nav className="flex justify-between px-6 py-4 items-center">
                <div className="px-1 py-1">
                    <span className="headers_font text-2xl font-bold">Wan Jong Kim</span>
                </div>
                <div className="hidden sm:block">
                    <ul className="flex flex-row gap-16">
                        <li className="headers_font text-xl">Home</li>
                        <li className="headers_font text-xl">Projects</li>
                        <li className="headers_font text-xl">Contact</li>
                    </ul>
                </div>
                <div className="sm:hidden rounded-md px-1 py-1 bg-red-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </div>
    )
}

export default Nav;