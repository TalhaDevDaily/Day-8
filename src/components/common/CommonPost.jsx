import React from "react";
import post1 from "../../assets/images/istockphoto-1500563478-612x612.jpg";

const CommonPost = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-1 h-[400px]">
      <div className="imgBox overflow-hidden h-[400px] w-[600px]">
        <img
          src={post1}
          className="hover:scale-[1.2] duration-[1s]"
          alt="Blog Image"
        />
      </div>
      <div className="textBox">
        <h2 className="title text-2xl font-semibold mb-1">Blog Title</h2>
        <h3 className="subHeader text-[14px] font-bold mb-2.5 text-gray-500">
          Sub-header
        </h3>
        <p className="text-[16px] mb-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          adipisci necessitatibus totam alias sint quos atque architecto? Ullam,
          eaque earum facilis eveniet voluptate aliquid quidem exercitationem
          nostrum id, minima harum.
        </p>

        <button className="bg-black text-white py-1 px-3 hover:bg-white hover:text-black hover:outline-2 outline-black duration-[0.4s]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CommonPost;
