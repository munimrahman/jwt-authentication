import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../features/products/productsApi";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const products = data?.data?.products;
  return (
    <div className="grid grid-cols-3 gap-5 my-14">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
