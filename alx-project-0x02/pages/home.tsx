import { HomeProps } from "@/interfaces";
import React from "react";

const Home: React.FC<HomeProps> =({ title="" }) => {
    return (
        <div>
            <h1 className="flex font-bold text-xl justify-center items-center p-10">This is my homepage</h1>
        </div>
    );
}

export default Home;