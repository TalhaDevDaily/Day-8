import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CommonPost from "../components/common/CommonPost";
import Button from "../components/common/Button";
import { blogservices } from "../services/api";

const BlogHome = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await blogservices.blog();
        setAllProducts(response.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <header className="mb-10">
          <h1 className="font-light text-5xl">Blog</h1>
          <h2 className="subheader font-bold text-[14px] text-gray-800">
            All your stories here in one Book...
          </h2>
        </header>
        <main className="flex flex-col gap-7">
          {allProducts &&
            allProducts.map((product) => (
              <CommonPost
                key={product.id}
                title={product.title}
                description={product.description}
                thumbnail={product.thumbnail}
                id={product.id}
              />
            ))}
        </main>
      </div>
    </>
  );
};

export default BlogHome;
