import React from "react";
import { useParams } from "react-router-dom";
export default function () {
  //get route params
  const { cname } = useParams();
  return (
    <div>
      <h2> category{cname}</h2>
    </div>
  );
}
