import React from "react";
import { useSearchParams } from "react-router-dom";
import ProdcutDetails from "./ProductDetails";
export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const Productdata = [
    { id: 1, name: "A", price: 45213, img: "https://picsum.photos/200/300" },
    { id: 2, name: "B", price: 75862, img: "https://picsum.photos/200" },
    { id: 3, name: "C", price: 21568, img: "https://picsum.photos/200/300" },
    { id: 4, name: "D", price: 78136, img: "https://picsum.photos/200" },
    { id: 5, name: "E", price: 23458, img: "https://picsum.photos/200/300" }
  ];

  return (
    <div>
      <h2>
        {" "}
        Latest Products {searchParams.get("ser")} {searchParams.get("limit")}
      </h2>
      <div>
        {" "}
        className='row'>
        {Productdata.map((pro) => (
          <ProdcutDetails key={pro.id} pro={pro} />
        ))}
      </div>
    </div>
  );
}
