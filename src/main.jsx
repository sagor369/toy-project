import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Home/Home";
import Login from "./UserLog/Login/Login";
import Register from "./UserLog/Register/Register";
import PriveteContext from "./PriveteRout/PriveteContext/PriveteContext";
import AllCategory from "./Home/Rout/AllCategory/AllCategory";
import '@smastrom/react-rating/style.css'
import PriveteRout from "./PriveteRout/PriveteContext/PriveteRout";
import AddCategory from "./AddCategory/AddCategory";
import CategoryDetail from "./Home/CategoryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/categorys",
        element: <PriveteRout><AllCategory></AllCategory></PriveteRout>,
        
      },
      {
        path: '/toys/:id',
        element: <PriveteRout><CategoryDetail></CategoryDetail></PriveteRout>,
        loader: ( {params})=> fetch(`http://localhost:5000/toys/${params.id}`)
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: '/addtoy',
    element : <AddCategory></AddCategory>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <PriveteContext>
      <RouterProvider router={router} />
    </PriveteContext>

    
  </div>
);
