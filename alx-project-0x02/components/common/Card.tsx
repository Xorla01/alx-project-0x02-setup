import { CardProps } from "@/interfaces";
import React from "react";

const Card: React.FC<CardProps> = ({ title = "", content = "" }) => {
  return (
    <div
      className="
        flex flex-col p-4 justify-center items-center gap-4
        w-full sm:w-[250px] md:w-[300px] lg:w-[350px]
        min-h-[200px]
        border-2 border-gray-500 rounded-md
        hover:scale-105 transition-transform duration-300 ease-in-out
        shadow-md
      "
    >
      <h3 className="font-bold text-[16px] text-center">
        {title}
      </h3>
      <div className="text-[14px] text-center">
        {content}
      </div>
    </div>
  );
};

export default Card;