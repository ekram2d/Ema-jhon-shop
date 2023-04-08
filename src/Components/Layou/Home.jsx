import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Shop from '../Shop/Shop';
import Orders from '../Orders/Orders';


const Home = () => {
      return (
            <div>
                 <Header></Header>
                 <Outlet></Outlet>
             
            </div>
      );
};

export default Home;