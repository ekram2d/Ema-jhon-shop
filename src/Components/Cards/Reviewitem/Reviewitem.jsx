import React from 'react';
import { BeakerIcon,TrashIcon } from '@heroicons/react/24/solid'
const Reviewitem = (props) => {
// console.log(props);
      const {card,deletebtn}=props;
      // const {deletebtn}=props.deletebtn;
      // console.log(card);
      const { id, img, name, price,quantity , shipping } = card;
      return (
            <div className='border rounded-lg shadow-lg lg:flex justify-between items-center  p-2'>
                  <div className='lg:flex justify-between  items-center '>
                        <img className='w-28 p-2' src={img}></img>
                        <div>
                              <h1>Name : {name}</h1>
                              <p>Price : ${price}</p>
                              <p>Quantity: {quantity}</p></div>
                  </div>


                  <div><button className='bg-pink-200 p-2 rounded-lg' onClick={()=>deletebtn(card)}> <TrashIcon  className="h-6 w-6 text-red-400" /></button></div>




            </div>
      );
};

export default Reviewitem;