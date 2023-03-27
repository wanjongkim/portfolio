import React from "react";
import styled from "styled-components"


const Works = () => {
    return (
        <div className="flex flex-col mt-16 px-6">
            <div className="mb-5">
                <h2 className="text-[#34a8eb] text-xl font-bold mb-2">PORTFOLIO</h2>
                <p className="text-lg font-bold">Each project is a unique piece of development</p>
            </div>
            <div className="flex flex-col">
                <img className="rounded-2xl" src="https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/en_us/products/2022/recommendations-on-twitter/how-recommendations-help-discover-more-twitter-1.jpg.twimg.768.jpg" />
                <div className="flex flex-col text-center">
                    <h2 className="my-4 text-2xl">Sociopedia</h2>
                    <p className="text-lg">Sociopedia is an online social media site and its primary purpose is to connect people and allow people to share their thoughts with a big audience.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Works;