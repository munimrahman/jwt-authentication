import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="grid grid-cols-3 gap-5 my-14">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default Products;
