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
import MyToys from "./Home/Rout/MyToys/MyToys";
import Blog from "./UserLog/Blog/Blog";
import Error from "./Share/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
      },
      {
        path:"/categorys",
        element: <PriveteRout><AllCategory></AllCategory></PriveteRout>,
        errorElement:<Error></Error>,
        loader: () => fetch('https://toy-server-site-nine.vercel.app/data')
        
      },
      {
        path: '/toy/:id',
        element: <PriveteRout><CategoryDetail></CategoryDetail></PriveteRout>,
        loader: ( {params})=> fetch(`https://toy-server-site-nine.vercel.app/toy/${params.id}`)
      }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
    errorElement:<Error></Error>,
  },
  {
    path: "register",
    element: <Register></Register>,
    errorElement:<Error></Error>,
  },
  {
    path: '/addtoy',
    element : <AddCategory></AddCategory>,
    errorElement:<Error></Error>,
  },
  {
    path: '/myToys',
    element: <PriveteRout><MyToys></MyToys></PriveteRout>,
    errorElement:<Error></Error>,
    
    
  },
  {
    path: 'blog',
    element: <Blog></Blog>,
    errorElement:<Error></Error>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <PriveteContext>
      <RouterProvider router={router} />
    </PriveteContext>

    
  </div>
);
