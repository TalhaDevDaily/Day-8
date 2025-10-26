import React from "react";

const CommonPost = ({ title, description, thumbnail, id }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 h-[400px]">
      <div className="imgBox overflow-hidden h-[400px] w-[600px]">
        <img
          src={thumbnail}
          className="hover:scale-[1.2] duration-1000 h-full w-full object-cover"
          alt={title}
        />
      </div>
      <div className="textBox">
        <h2 className="title text-2xl font-semibold mb-1">{title}</h2>
        <h3 className="subHeader text-[14px] font-bold mb-2.5 text-gray-500">
          Product #{id}
        </h3>
        <p className="text-[16px] mb-7">{description}</p>

        <button className="bg-black text-white py-1 px-3 hover:bg-white hover:text-black hover:outline-2 outline-black duration-[0.4s]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CommonPost;
