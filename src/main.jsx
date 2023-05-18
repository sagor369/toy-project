import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';
import Home from './Home/Home';
import Login from './UserLog/Login/Login';
import Register from './UserLog/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: 'login',
    element: <Login></Login>
  },
  {
    path: 'register',
    element: <Register></Register>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>

    <RouterProvider router = {router} />
  </div>
)
