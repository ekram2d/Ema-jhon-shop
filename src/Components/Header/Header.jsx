import React from 'react';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
      return (
            <div className='bg-slate-800 text-white lg:flex justify-between items-center  px-11'>
                  <div className=''>
                        <img src={logo}></img>
                  </div>
                 
                   <div className='lg:flex justify-end space-x-4 ' >
                        <Link className='hover:text-orange-300' to='/'>shop</Link>
                        <Link  className='hover:text-orange-300'to='/orders'>Orders</Link>
                        <Link className='hover:text-orange-300' to='/inventory'> Inventory</Link>
                        <Link className='hover:text-orange-300' to='/login'>Login</Link>
                   </div>

                 
            </div>
      );
};

export default Header;