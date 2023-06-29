import React from "react";
import ProdcutDetails from "./ProductDetails";
export default function Products({ Productdata }) {
  return (
    <div>
      <h2> Latest Products </h2>
      <div className="row">
        {Productdata.map((pro) => (
          <ProdcutDetails key={pro.id} pro={pro} />
        ))}
      </div>
    </div>
  );
}
