import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/LAyou/Home';
import Shop from './Components/Shop/Shop';
import Header from './Components/Header/Header';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductLoader from './Loaders/cartProductLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  
    children: [
      {
        path: "/",
    element: <Shop></Shop>,
      },
    
      {
        path: "orders",
    element: <Orders></Orders>,
    loader:cartProductLoader,
      },
      {
        path: "inventory",
    element: <Inventory></Inventory>,
      },
      {
        path: "login",
    element: <Login></Login>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
