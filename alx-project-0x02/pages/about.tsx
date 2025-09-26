import { AboutProps } from "@/interfaces";
import React from "react";

const About: React.FC<AboutProps> = ({ title="" }) => {
        return (
        <div>
            <h1 className="flex font-bold text-xl justify-center items-center p-10">Find everything about me here!</h1>
        </div>
    );
}

export default About;