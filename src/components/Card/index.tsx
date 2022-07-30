/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

type ICard = {
  name: string;
  count: number;
};

const Card = ({ name, count }: ICard) => {
  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center h-full">
      <p className="w-full pb-6 px-4 text-2xl font-bold text-center sm:text-3xl md:text-4xl flex-wrap">
        {name}
      </p>
      <p className="text-xl text-gray-700 sm:text-5xl"> {count} </p>
    </div>
  );
};

export default Card;
