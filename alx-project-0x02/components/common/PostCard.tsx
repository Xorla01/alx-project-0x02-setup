import { PostProps } from "@/interfaces";
import React from "react";

const PostCard: React.FC<PostProps> = ({ userID, title, content }) => {
    return (
        <div className="border p-4 rounded shadow hover:scale-105 transition-transform duration-300">
            <h2 className="font-bold text-lg text-gray-600 mb-2 break-words">UserID:{userID}</h2>
            <h3 className="font-bold break-words">{title}</h3>
            <p className="break-words whitespace-normal">{content}</p>   
        </div>
    );
};

export default PostCard;