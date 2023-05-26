import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import AOS from "aos";
import "aos/dist/aos.css";

const Review = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://toy-server-site-nine.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  AOS.init();
  return (
    <div data-aos="fade-left" data-aos-offset="400" className=" py-10">
      <h1 className="w-52 border-b border-orange-600 text-2xl font-bold pb-2 mb-4">Customer Review</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
        {review.map((data) => (
          <div className="card w-3/4 mx-auto md:w-full bg-base-100 shadow-xl"
          key={data._id}>
            <figure>
              <img
                src={data.photo}
                alt="Shoes"
                className="w-11/12 mt-2 rounded h-72"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
              <p className="flex gap-2 items-center">
                <span>Ratings: </span>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={Math.round(data.rating)}
                  readOnly
                />{" "}
                <span>{data.rating}</span>
              </p>
              <p>{data.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
