import { AboutProps } from "@/interfaces";
import Button from "@/components/common/Button";
import React from "react";

const About: React.FC<AboutProps> = ({ title="" }) => {
    const handleSmallClick = () => alert("Small button clicked!");
    const handleMediumClick = () => alert("Medium button clicked!");
    const handleLargeClick = () => alert("Large button clicked!");

        return (
        <div className="">
            <h1 className="flex font-bold text-2xl justify-center items-center mb-4">
                Find everything about me here!
            </h1>

           <div className="flex flex-col gap-4 justify-center items-center">
                <Button 
                    label="About Me" 
                    size="small" 
                    shape="rounded-sm" 
                    onClick={handleSmallClick} 
                />
                <Button label="About Me" size="medium" shape="rounded-md" onClick={handleMediumClick} />
                <Button label="About Me" size="large" shape="rounded-full" onClick={handleLargeClick} />
           </div>
        </div>
    );
}

export default About;