import React, { useEffect, useState } from "react";
import Category from "./Category";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categorys = () => {
  const [categorys, setCategory] = useState([]);

  const [robot, setRobot] = useState([]);
  const [cars, setCars] = useState([]);
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    fetch("https://toy-server-site-nine.vercel.app/toys/robotics")
      .then((res) => res.json())
      .then((data) => setRobot(data));

    fetch("https://toy-server-site-nine.vercel.app/toys/cars")
      .then((res) => res.json())
      .then((data) => {setCars(data)
    console.log(data)});

    fetch("https://toy-server-site-nine.vercel.app/toys/phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className="py-4 my-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
      <div>
        <Tabs>
          <TabList>
            <div className="md:text-center py-6">
            <Tab>Robotics</Tab>
            <Tab>Cars</Tab>
            <Tab>Phone</Tab>
            </div>
          </TabList>

          <TabPanel>
            <div className="grid px-6 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {robot.map((category) => (
              <Category key={category._id} category={category}></Category>
            ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {cars.map((category) => (
              <Category key={category._id} category={category}></Category>
            ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid px-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {phones.map((category) => (
              <Category key={category._id} category={category}></Category>
            ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
      <div className="text-center py-6">
        <Link to="/categorys" className="btn">
          See More
        </Link>
      </div>
    </div>
  );
};

export default Categorys;
