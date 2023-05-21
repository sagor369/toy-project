import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'

const Category = ({ category }) => {
    const { pictureUrl, name, price, rating, _id } = category;
    const [ratings, setRating] = useState(rating)

  return (
    <div className="card mb-4 w-96 bg-base-100 shadow-xl">
      
      <figure>
        
        <img src={pictureUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {" "}
          Price: $<span>{price}</span>
        </p>
        <p className="flex gap-2 items-center">
        <span>Ratings: </span> 
        <Rating style={{ maxWidth: 100 }} value={Math.round(ratings)} readOnly /> <span>{ratings}</span>
        </p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now </button>
          <button className="btn btn-secondary">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
