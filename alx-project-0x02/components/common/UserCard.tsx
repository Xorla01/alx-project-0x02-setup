import { type UserProps } from "@/interfaces";
import React from "react";

const UserCard: React.FC<UserProps> = ({name, email, address}) => {
    return (
        <>
            <div className="border rounded p-4 shadow">
                <h3 className="font-bold text-lg ">Username: {name}</h3>
                <p className="text-gray-500">Email: {email}</p>
                
                <div className="text-sm text-gray-500 mt-2">
                    <p>Street: {address.street}</p>
                    <p>Suite: {address.suite}</p>
                    <p>City: {address.city}</p>
                    <p>Zipcode: {address.zipcode}</p>
                </div>
            </div>
        </>
    );
};

export default UserCard;