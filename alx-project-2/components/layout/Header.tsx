import { HeaderProps } from "@/interfaces";
import React from "react";

const Header: React.FC<HeaderProps> = ({ title = "", logo = "" }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>{logo}</div>
        </div>
    );
}

export default Header;