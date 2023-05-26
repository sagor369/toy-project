import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Link, Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = ({ category }) => {
  const { pictureUrl, name, price, rating, _id, detailDescription } = category;
  const [ratings, setRating] = useState(rating);

  AOS.init()
  return (
    <div className="card mb-4 w-96 bg-base-100 shadow-xl"  data-aos="fade-down"
    data-aos-offset="200">
      <figure>
        <img className="w-3/4 mt-4 rounded h-64" src={pictureUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          
          Price: $<span>{price}</span>
        </p>
        <p className="flex gap-2 items-center">
          <span>Ratings: </span>
          <Rating
            style={{ maxWidth: 100 }}
            value={Math.round(ratings)}
            readOnly
          />
          <span>{ratings}</span>
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now </button>
          <Link 
            to={`/toy/${_id}`}
            className="btn btn-secondary"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
