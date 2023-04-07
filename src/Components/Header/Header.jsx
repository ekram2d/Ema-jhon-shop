import React from 'react';
import logo from '../../images/Logo.svg'
const Header = () => {
      return (
            <div className='bg-slate-800 text-white lg:flex justify-between items-center  px-11'>
                  <div className=''>
                        <img src={logo}></img>
                  </div>
                  <div>
                   <ul className='lg:flex justify-end space-x-4 ' >
                        <a className='hover:text-orange-300' href='/'>Order</a>
                        <a  className='hover:text-orange-300' href='/'>Order Review</a>
                        <a className='hover:text-orange-300' href='/'>Manage inventiry</a>
                        <a className='hover:text-orange-300'  href='/'>Login</a>
                   </ul>

                  </div>
            </div>
      );
};

export default Header;