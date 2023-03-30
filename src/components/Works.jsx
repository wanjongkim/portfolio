import React from "react";


const Works = () => {
    return (
        <div id="projects" className="flex flex-col pt-20 px-6 pb-10">
            <div className="mb-5 text-center">
                <h2 className="text-[#34a8eb] text-xl font-bold mb-2">PORTFOLIO</h2>
                <p className="text-lg font-bold">Each project is a unique piece of development</p>
            </div>
            <div className="flex flex-col bg-white rounded-2xl px-5 pt-5 pb-10 shadow-md max-w-2xl mx-auto">
                <img className="rounded-2xl shadow-md" src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2022/recommendations-on-twitter/how-recommendations-help-discover-more-twitter-1.jpg.twimg.768.jpg" />
                <div className="flex flex-col text-center">
                    <h2 className="my-4 text-2xl">Sociopedia</h2>
                    <p className="text-lg">Sociopedia is an online social media site and its primary purpose is to connect people and allow people to share their thoughts with a big audience.
                    </p>
                    <p className="flex gap-4 justify-center text-gray-400 font-light mt-2 flex-wrap">
                        <span>React</span>
                        <span>HTML & CSS</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col bg-white rounded-2xl px-5 pt-5 pb-10 shadow-md mt-12 max-w-2xl mx-auto">
                <a href=""><img className="rounded-2xl shadow-md" src="https://img4.cityrealty.com/neo/i/p/mig/airbnb_guide.jpg" /></a>
                <div className="flex flex-col text-center">
                    <h2 className="my-4 text-2xl">Booker</h2>
                    <p className="text-lg">Booker is a service that lets property owners rent out their spaces to travelers looking for a place to stay. Travelers can rent a space for multiple people to share, a shared space with private rooms, or the entire property for themselves.
                    </p>
                    <p className="flex gap-4 justify-center text-gray-400 font-light mt-2 flex-wrap">
                        <span>React</span>
                        <span>HTML & CSS</span>
                        <span>Express</span>
                        <span>MongoDB</span>
                        <span>AWS S3</span>
                        <span>Tailwind CSS</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Works;