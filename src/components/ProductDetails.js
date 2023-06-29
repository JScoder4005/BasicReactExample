import React from "react";

export default function ProdcutDetails({ pro }) {
  return (
    <div>
      Name: {pro.name}
      <br />
      price: {pro.price}
      <br />
      <img src={pro.img} alt="" />
      <br />
    </div>
  );
}
