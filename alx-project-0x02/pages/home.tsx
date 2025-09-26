import { HomeProps } from "@/interfaces";
import React from "react";

const Home: React.FC<HomeProps> =({ title="" }) => {
    return (
        <div className="flex flex-row gap-2">
            <h1 className="font-medium text-xl">This is my homepage</h1>
        </div>
    );
}

export default Home;