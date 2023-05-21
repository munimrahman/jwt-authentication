import React from "react";

const ProductCard = ({ product }) => {
  const { name, photo, price, description } = product || {};
  console.log(product);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions items-center justify-end">
          <p className="text-xl font-bold text-gray-500">BDT {price}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
