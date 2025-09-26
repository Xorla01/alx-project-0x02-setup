import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}>
            <Header 
                title="My Next.js App" 
                logo="🚀" 
                links= {[ 
                { label: "Home", href: "/home" }, 
                { label: "About", href: "/about" } 
                ]} 
                />
            <main className="flex flex-col justify-center">
                <h1 className="font-bold text-3xl text-center">
                    Welcome to my Page
                </h1>

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
            </main>
        </div>
    );
}
