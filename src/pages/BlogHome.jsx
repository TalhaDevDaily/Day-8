import React from "react";
import Navbar from "../components/Navbar";
import CommonPost from "../components/common/CommonPost";

const BlogHome = () => {
  <Navbar />;
  return (
    <>
      {/* <Navbar /> */}

      <div className="container">
        <header className="mb-10">
          <h1 className="font-light text-5xl">Blog</h1>
          <h2 className="subheader font-bold text-[14px] text-gray-800">
            All your stories here in one Book...
          </h2>
        </header>
        <main className="flex flex-col gap-7">
          <CommonPost />
          <CommonPost />
          <CommonPost />
          <CommonPost />
          <CommonPost />
        </main>
      </div>
    </>
  );
};

export default BlogHome;
