import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Share/Header/Header";
import Footer from "../Share/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { toastify } from "../Share/Toastify/Toastify";

const UpdateToy = () => {
  const data = useLoaderData();
  const {name,quantity,price,detailDescription, _id } = data[0]

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = parseInt(form.price.value);
    const quantity = parseInt(form.quantity.value);
    const detailDescription = form.detailDescription.value;
    const data = {
        name, price, quantity,detailDescription
    }
    fetch(`https://toy-server-site-nine.vercel.app/update/${_id}`, {
    method:'put',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
            toastify('update successfull')
        }
    })
  };

  return (
    <div>
      <Header></Header>

      <div className="my-4 px-10 py-20 bg-opacity-40 bg-gradient-to-b from-purple-600 via-cyan-200 to-pink-500 ">
        <h1 className="text-center text-4xl border-b pb-4 font-bold text-pink-300 mb-6 ">
          Update Your Toy
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="">
              <label className="input-group input-group-vertical">
                <span>Toy Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="toy name"
                  className="input input-bordered"
                  defaultValue={name}
                />
              </label>
            </div>
            <div className="">
              <label className="input-group input-group-vertical">
                <span>Price</span>
                <input
                  name="price"
                  type="number"
                  placeholder="$ toy price "
                  className="input input-bordered"
                  defaultValue={price}
                />
              </label>
            </div>
            <div className="">
              <label className="input-group input-group-vertical">
                <span>Available Quantity</span>
                <input
                  type="number"
                  name="quantity"
                  className="input input-bordered"
                  defaultValue={quantity}
                />
              </label>
            </div>
            <textarea
              placeholder="description your toy"
              name="detailDescription"
              rows="10"
              cols="50"
              className="p-4 rounded "
              defaultValue={detailDescription}
            />
          </div>
          <div className="flex justify-center">
            <button className="btn btn-wide " type="submit">
              Submit
            </button>
          </div>
        </form>
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
      <Footer></Footer>
    </div>
  );
};

export default UpdateToy;
