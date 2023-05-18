import React from "react";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-purple-400">
      <h1 className="text-5xl font-bold text-center py-4 border text-pink-900">
        Login now
      </h1>
      <div className="card-body w-1/2 mx-auto ">
        <form>
          <div className="form-control">
            <label className="label">
              <span className="text-lg">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="name"
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
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
    </div>
  );
};

export default Login;
