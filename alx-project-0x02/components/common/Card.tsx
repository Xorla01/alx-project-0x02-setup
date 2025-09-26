import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title = "", content = "" }) => {
  return (
    <div className="flex flex-col p-4 justify-center items-center gap-4 w-[300px] h-[200px] border-2 border-gray-500 rounded-md hover:scale-102 transition">
      <h3 className="font-bold text-[14px]">
        {title}
      </h3>
      <div className="text-[14px]">
        {content}
      </div>
    </div>
  );
};

export default Card;