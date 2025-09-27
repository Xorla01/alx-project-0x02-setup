import { HomeProps } from "@/interfaces";
import Card from "@/components/common/Card";
import React from "react";

const Home: React.FC<HomeProps> =({ title="" }) => {
    return (
        <div>
            <h1 className="flex font-bold text-xl justify-center items-center p-10">{title}</h1>

            <div className="grid grid-cols-2 gap-10 m-6 p-2.5 justify-center items-center text-center">
                    <Card   
                        title ="Card Type One"
                        content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                    />
                    
                    <Card 
                        title ="Card Type Two"
                        content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                    />

                    <Card 
                        title ="Card Type Three"
                        content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                    />

                    <Card 
                        title ="Card Type Four"
                        content="This card is rendered automatically on this Next.js app. Pleasee rate my first card."
                    />
                </div>
        </div>
    );
}

export default Home;