import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  AOS.init()
  return (
    <div
      className="hero border-[20px] border-black border-opacity-80 min-h-screen bg-[url('https://i.ibb.co/CMYVJxD/banner.jpg')]"
    //   style={{
    //     backgroundImage:' url("https://ibb.co/F0y8sGC")'
    //   }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md" data-aos="fade-right"
    data-aos-offset="200">
          <h1 className="pb-5 text-5xl font-bold title-text">welcome to my digital toy shop </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary text-xl">Details</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
