import { HeaderProps } from "@/interfaces";
import Link from "next/link";
import React from "react";

const Header: React.FC<HeaderProps> = ({ title = "", logo = "", links = [] }) => {
    return (
        <header className="flex font-bold justify-between items-center gap-10 p-1 w-full h-10">
            <div className="flex gap-4 justify-between items-center">
                <h1>{title}</h1>
                <div>{logo}</div>
            </div>

            <nav className="flex gap-2.5">{links.map((link)  => (
                <Link key={link.href} href={link.href} className="hover:underline">
                    {link.label}
                </Link>
                ))}
            </nav>
        </header>
    );
}

export default Header;