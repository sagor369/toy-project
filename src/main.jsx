import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>

    <RouterProvider router = {router} />
  </div>
)
