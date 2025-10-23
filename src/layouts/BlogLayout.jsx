import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const BlogLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default BlogLayout;
