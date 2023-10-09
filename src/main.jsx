import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';

import Home from './layout/Home/Home';
import Login from './layout/Login/Login';
import SignUp from './layout/SignUp/SignUp';
import DetailsService from './components/DetailsService/DetailsService';
import AuthProvider from './AuthProvider/AuthProvider';
import Error from './Error/Error';
import PrivetRoute from './PrivetRoute/PrivetRoute';
import Blogs from './layout/Blogs/Blogs';
import Photos from './layout/Photos/Photos';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('/data.json')
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      {
        path:"/details/:id",
        element:<PrivetRoute><DetailsService></DetailsService></PrivetRoute>,
        loader:()=>fetch('/data.json')
      },
      {
        path:"/blogs",
        element:<PrivetRoute><Blogs></Blogs></PrivetRoute>,
        loader:()=>fetch('/blogs.json')
      },
      {
        path:"/photos",
        element:<PrivetRoute><Photos></Photos></PrivetRoute>,
        loader:()=>fetch('/photos.json')
      }
    
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />

    </AuthProvider>
  </React.StrictMode>,
)
