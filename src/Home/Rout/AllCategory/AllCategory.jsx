import React, { useEffect, useState } from "react";
import Category from "../../Category";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllCategory = () => {
  const [robot, setRobot] = useState([]);
  const [cars, setCars] = useState([]);
  const [phones, setPhones] = useState([]);
  useEffect( () => {
     fetch("https://toy-server-site-nine.vercel.app/toys/robotics")
      .then((res) => res.json())
      .then((data) => setRobot(data));

     fetch("https://toy-server-site-nine.vercel.app/toys/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));

     fetch("https://toy-server-site-nine.vercel.app/toys/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));

     
      
  }, []);

  return (

    <div className="py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
           

      <h2 className="text-5xl font-bold text-center py-4 text-pink-300 uppercase border-b mb-5">
        all category
      </h2>

      <h2 className="text-2xl font-bold w-72 bg-orange-500 mt-10 py-4 mb-6 text-white pl-4">
        Robotics sections
      </h2>
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {robot.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>

      <h2 className="text-2xl font-bold w-72 bg-orange-500 mt-10 py-4 mb-6 text-white pl-4">
        Cars sections
      </h2>
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
      <h2 className="text-2xl font-bold w-72 bg-orange-500 mt-10 py-4 mb-6 text-white pl-4">
        Cars sections
      </h2>
      <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phones.map((category) => (
          <Category key={category._id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default AllCategory;
