import React from "react";

export default function ProdcutDetails({ pro }) {
  return (
    <div className='col-sm-4'>
      Name: {pro.name}
      <br />
      price: {pro.price}
      <br />
      <img src={pro.img} width={200} height={150} alt="" />
      <br />
    </div>
  );
}
