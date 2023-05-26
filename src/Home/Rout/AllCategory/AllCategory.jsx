import React, { useEffect, useState } from "react";
import Category from "../../Category";
import AOS from "aos";
import "aos/dist/aos.css";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router-dom";

const AllCategory = () => {
  const [robot, setRobot] = useState([]);
  const { totalData } = useLoaderData();
  const [currentPage , setCurrentPage] = useState(0)
  const perPage = 10;
  const totalPages = Math.ceil(totalData / perPage);
  const pageNumber = [...Array(totalPages).keys()];
  console.log(currentPage);

  useEffect( () => {
    console.log('ami avar asci')
    async function loadData(){

      const respons = await fetch(`https://toy-server-site-nine.vercel.app/toys?page=${currentPage}&perPage=${perPage}`)
      const data = await respons.json() 
      setRobot(data) 
    }
    loadData()
   
  }, [currentPage]);

  const sortHandle = () => {
    fetch("https://toy-server-site-nine.vercel.app/toys/sort")
      .then((res) => res.json())
      .then((data) => setRobot(data));
  };
  AOS.init();

  return (
    <div className="py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
      <div className="border-b mb-5 py-4">
        <h2 className="text-5xl w-auto font-bold text-center  text-pink-300 uppercase ">
          all category
          <button
            className="btn btn-accent inline float-right"
            onClick={sortHandle}
          >
            {" "}
            sort by price
          </button>
        </h2>
      </div>

      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robot.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
      <div className="flex justify-center">

      <div className="btn-group ">
        {pageNumber.map((number) => (
          <button 
          className={currentPage === number? "btn btn-active": "btn"} 
          key={number}
          onClick={() =>setCurrentPage(number)}>
            {number + 1}
          </button>
        ))}
      </div>
      </div>

    </div>
  );
};

export default AllCategory;
