import React from 'react';
import { FaGoogle } from "react-icons/fa";
import Header from "../../Share/Header/Header";
import Footer from "../../Share/Footer/Footer";

const Register = () => {
    return (
        <div className="min-h-screen bg-purple-400">
        <Header></Header>
      <h1 className="text-5xl font-bold text-center mt-2 py-4 border-b text-pink-900">
        Register now
      </h1>
      <div className="card-body w-1/2 mx-auto ">
        <form>
          <div className="form-control">
            <label className="label">
              <span className="text-lg">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
            />
           
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" text-lg">PhotoUrl</span>
            </label>
            <input
              type="file"
              name="photo"
            />
           
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="grid h-20 card bg-orange-300 rounded-box place-items-center">
          <div>
            <div className="flex gap-2 items-center">
              <FaGoogle className="w-8 h-8" /> <span>Google</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
    );
};

export default Register;