import { type UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({name, email, address}) => {
    return (
        <>
            <div className="gap-4">
                <h3 className="font-bold text-2xl text-wrap break-words text-gray-500">Username: {name}</h3>
                <p className="font-bold break-words">Email: {email}</p>
                <p className="break-words">Address: {address}</p>
            </div>
        </>
    );
};

export default UserCard;