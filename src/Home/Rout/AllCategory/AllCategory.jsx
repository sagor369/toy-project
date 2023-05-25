import React, { useEffect, useState } from "react";
import Category from "../../Category";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-tabs/style/react-tabs.css';

const AllCategory = () => {
  const [robot, setRobot] = useState([]);
  const [cars, setCars] = useState([]);
  const [phones, setPhones] = useState([]);
  useEffect( () => {
     fetch("https://toy-server-site-nine.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setRobot(data));


     
      
  }, []);

  const sortHandle = () => {
    fetch("https://toy-server-site-nine.vercel.app/toys/sort")
      .then((res) => res.json())
      .then((data) => setRobot(data));


  }
  console.log(robot)
  AOS.init()

  return (

    <div className="py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
           
    <div className="border-b mb-5 py-4">

      <h2 className="text-5xl w-auto font-bold text-center  text-pink-300 uppercase ">
        all category<button className="btn btn-accent inline float-right" onClick={sortHandle}> sort by price</button>
      </h2>
        
    </div>
      
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robot.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>

      
    </div>
  );
};

export default AllCategory;
