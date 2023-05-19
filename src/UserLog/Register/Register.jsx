import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import Header from "../../Share/Header/Header";
import Footer from "../../Share/Footer/Footer";
import { AuthContext } from '../../PriveteRout/PriveteContext/PriveteContext';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { toastify } from '../../Share/Toastify/Toastify';


const Register = () => {

    // react toastify code 
    // const successToastify = (data) => {
    //   // console.log(message)
    //   toast.success(data, {
    //   position: "top-center",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    //   })};

      

    

    const {register, googleSignIn} = useContext(AuthContext)

    // email & register from handler function 

    const handleRegister = event =>{
        event.preventDefault()
        const from = event.target 
        const name = from.name.value 
        const email = from.email.value 
        const password = from.password.value 
        const photo = from.photo.value 

        register(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            toastify("Registation successfull")
        })
        .catch(error =>{
            console.log(error.code)
        })

        from.reset()
        
    }
  

    // handle google register 
    const googleSigninHandler = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user
            console.log(user)
            successToastify()
        })
        .catch(error =>{
            console.log(error.code)
        })
        
    }




    return (
        <div className="min-h-screen bg-purple-400">
        <Header></Header>
      <h1 className="text-5xl font-bold text-center mt-2 py-4 border-b text-pink-900">
        Register now
      </h1>
      <div className="card-body w-1/2 mx-auto ">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="text-lg">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
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
              required
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
              required
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

export default Register;