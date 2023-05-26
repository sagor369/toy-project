import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../PriveteRout/PriveteContext/PriveteContext";
import { FaEdit, FaArchive } from "react-icons/fa";
import Header from "../../../Share/Header/Header";
import {  toastDelete } from "../../../Share/Toastify/Toastify";
import { ToastContainer } from "react-toastify";
import Swal from 'sweetalert2'
import Footer from "../../../Share/Footer/Footer";
import Error from "../../../Share/Error/Error";
import { Link } from "react-router-dom";
import useTitle from "../../../Share/UseTitle/useTitle";

const MyToys = () => {
  useTitle('My Toy')
  const [category, setCategory] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;
  const [load, setLoad] = useState(false)
  useEffect(() => {
    fetch(`https://toy-server-site-nine.vercel.app/user/${email}`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [load]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-server-site-nine.vercel.app/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.error){
          <Error></Error>
        }
        if (data.deletedCount > 0) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          setLoad(!load)
        }
      });
        
      }
    })
    
  };
  

  return (
    <div>
      <Header></Header>

      <table className="w-10/12 mx-auto py-10">
        <thead>
          <tr className="border-b py-4 grid grid-cols-7 ">
            <th className="col-span-1  ">Seller name</th>
            <th className="col-span-2  ">Seller Email</th>
            <th className="col-span-1  ">Toy Name</th>
            <th className="col-span-1  ">Price</th>
            <th className="col-span-1  ">Quantity</th>
            <th className="col-span-1  ">Edit</th>
          </tr>
        </thead>
        <tbody>
          {category.map((data) => (
            <tr className=" py-4 text-center grid grid-cols-7" key={data._id}>
              <td className="col-span-1  "> {data.sellerName}</td>
              <td className="col-span-2  "> {data.sellerEmail}</td>
              <td className="col-span-1  "> {data.name}</td>
              <td className="col-span-1  "> {data.price}</td>
              <td className="col-span-1  "> {data.quantity}</td>
              <td className="col-span-1  justify-evenly  flex ">
                <Link to={`/update/${data._id}`}>
                <FaEdit
                  className="cursor-pointer"
                />
                </Link>
                <FaArchive
                  onClick={() => handleDelete(data._id)}
                  className="cursor-pointer"
                />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default MyToys;
