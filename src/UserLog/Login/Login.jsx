import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import Header from "../../Share/Header/Header";
import Footer from "../../Share/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "../../PriveteRout/PriveteContext/PriveteContext";
import { toastify } from "../../Share/Toastify/Toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const {login , googleSignIn } = useContext(AuthContext)
  const location = useLocation()
  const form = location.state?.from?.pathname || '/'
  const navigate = useNavigate()



// handle login function 

  const handleLogin = (event) =>{
    event.preventDefault()
    const from = event.target 
    const email = from.email.value 
    const password = from.password.value 
    

    login(email, password)
    .then(result => {
      const user = result.user 
      console.log(user)
      toastify('Login successfull')
      from.reset()
      navigate(form, { replace: true })

    })

    .catch(error =>{
      console.log(error.code )
    })

  }


   // handle google register 
   const googleSigninHandler = () =>{
    googleSignIn()
    .then(result => {
        const user = result.user
        console.log(user)
        navigate(form, { replace: true })
    })
    .catch(error =>{
        <Error>{error}</Error>
    })
    
}

  return (

    <div className="min-h-screen bg-purple-400">
      
        <Header></Header>
      <h1 className="text-5xl font-bold text-center mt-2 py-4 border-b text-pink-900">
        Login now
      </h1>
      {/* <div className="card-body w-1/2 mx-auto "> */}
      <div className="card-body mx-auto rounded my-10 flex-shrink-0 w-1/2 shadow-2xl bg-base-100 ">
        <form onSubmit={handleLogin}>
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
          
            <label className="">
              Create a new 
              <Link to="/register" className=" ml-2 text-blue-400 link link-hover">
                Register
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          </div>
        </form>
        <div className="divider">OR</div>
        <div className="grid cursor-pointer h-20 card bg-orange-300 rounded-box place-items-center">
          <div>
            <div onClick={googleSigninHandler} className="flex gap-2 items-center">
              <FaGoogle className="w-8 h-8" /> <span>Google</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Login;
