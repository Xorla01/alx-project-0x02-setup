import { type AboutProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
import React from "react";

const About: React.FC<AboutProps> = ({ title="" }) => {
    const handleSmallClick = () => alert("Small button clicked!");
    const handleMediumClick = () => alert("Medium button clicked!");
    const handleLargeClick = () => alert("Large button clicked!");

        return (
        <div className="">
            <Header title="My Next.js App" logo="🚀" />

            <div className="p-6 space-y-4">
                <h1 className="font-bold text-2xl justify-center items-center mb-4">About Page</h1>
                <p>This is the about page.</p>
            </div>
            
           <div className="flex flex-col gap-4 justify-center items-center">
                <Button 
                    label="About Me" 
                    size="small" 
                    shape="rounded-sm" 
                    onClick={handleSmallClick} 
                />
                <Button 
                    label="About the Page" 
                    size="medium" 
                    shape="rounded-md" 
                    onClick={handleMediumClick} 
                />
                <Button 
                    label="About the Page" 
                    size="large" 
                    shape="rounded-full" 
                    onClick={handleLargeClick} 
                />
           </div>
        </div>
    );
};

export default About;