import React from "react";
import { Link, Navigate, useLoaderData } from "react-router-dom";

const CategoryDetail = () => {

  const data = useLoaderData();
  const { pictureUrl, name, price, rating, _id, detailDescription } = data[0];

  console.log(data);
  return (
    <div className=" md:max-w-3xl mx-auto my-20  border-blue-400 border-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full   shadow-2xl justify-center  p-6 ">
        <div className=" border">
          <img className="w-full" src={pictureUrl} alt="" />
        </div>
        <div className="">
          <h1 className="font-bold text-3xl mb-6">{name} </h1>
          <p className="text-xl font-bold mb-2 "> Price : ${price} </p>
          <p className="text-xl font-bold mb-2">Rating : {rating} </p>
          <p><span className="text-xl font-bold ">Detail :</span> {detailDescription} </p>
          <button className="btn mt-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
