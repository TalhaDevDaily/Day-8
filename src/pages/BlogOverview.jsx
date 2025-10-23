import React from "react";
import blogImg from "../assets/images/istockphoto-1500563478-612x612.jpg";
import author from "../assets/images/urban.jpg";

const BlogOverview = () => {
  return (
    <>
      <div className="container">
        <h1 className="font-light text-5xl mb-6">Blog Title</h1>
        <div className="flex gap-10 items-center mb-8">
          <div className="author w-[60px] h-[60px] overflow-hidden rounded-full">
            <img src={author} alt="Author" className="" />
          </div>
          <div>
            <p className="subheader font-bold text-[14px] text-gray-800">
              Louren Graham, September 26, 2025
            </p>
          </div>
        </div>
        <img src={blogImg} alt="Blog Image" className="mb-8" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sunt
          officiis voluptate, illo, et magni veniam ipsa soluta facere excepturi
          dolorum iste, aliquid tenetur sit ullam fugit a tempora? Labore et
          consequatur, minima repellat perferendis, eius cumque maiores,
          provident perspiciatis delectus incidunt magnam blanditiis ipsum
          dolorum odio distinctio? Culpa, eveniet corporis. Eligendi dolorem
          unde nihil aliquam voluptatum hic laborum corrupti ipsum obcaecati
          error laudantium sint ea nisi officiis libero tempora veniam ex, illum
          molestiae quis aperiam iusto! Eum eveniet cum voluptatum cupiditate et
          suscipit quas modi odit. Pariatur voluptatum nam repellat ad, dolore
          corporis delectus necessitatibus saepe tenetur ea voluptas accusamus
          aliquam non iusto autem nobis quia, perspiciatis ullam provident
          sapiente sit vero excepturi possimus placeat! Voluptate natus maiores,
          molestiae asperiores rem labore, animi consequuntur quae commodi iusto
          culpa nam sint saepe distinctio quisquam ratione facilis dignissimos
          aut, reprehenderit voluptates deleniti! Quia sapiente fugit placeat
          odit quis tempora itaque magni eligendi quidem esse quod aperiam illum
          rem facilis voluptate, voluptates reiciendis consectetur maiores
          recusandae voluptatibus modi, quasi, nobis consequatur. Fugiat est
          explicabo doloremque eos, beatae veniam molestiae expedita sunt amet
          dolorem nostrum ipsam saepe mollitia recusandae sint animi praesentium
          ullam asperiores eius minima distinctio? Nobis quisquam ipsum
          distinctio ipsam optio.
        </p>
      </div>
    </>
  );
};

export default BlogOverview;
