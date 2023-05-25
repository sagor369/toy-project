import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("https://toy-server-site-nine.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  AOS.init()
  return (
    <div data-aos="fade-right"
    data-aos-offset="400" className="py-4 my-20 bg-opacity-40 bg-gradient-to-l from-purple-600 via-cyan-200 to-pink-500 ">
       <h2 className="text-5xl w-auto font-bold text-center border-b py-4  text-orange-300 uppercase ">
        Gallery Of Toy
      </h2>
      <div className="md:w-2/3 mx-auto my-20">
        <AutoplaySlider
          animation="cubeAnimation"
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
          
        >
          {datas.map((data) => (
            <div key={data._id}>
              <div>
                <img  src={data.pictureUrl} />
              </div>
            </div>
          ))}
        </AutoplaySlider>
      </div>
    </div>
  );
};

export default Gallery;
