import React from 'react';

const Product = ({ product,btnClick }) => {
      // console.log(product);
      const { id, img, name, price, seller,ratings,quantity
      } = product;
      return (

            <div className='border rounded-lg   w-52 h-96 relative'>
                  <div className='p-2'>
                        <img className='w-56' src={img}></img>

                        <h1 className='p-2 font-bold'  >{name}</h1>
                        <p>pirce : {price}</p>
                  
                        <p >Manufacture: {seller}</p>
                        <p>Rating:{ratings}</p>
                  </div>


                  <button className='rounded-lg bg-orange-400 w-full absolute bottom-0 hover:bg-orange-700' onClick={()=>btnClick(product)}>Add to chart</button>

            </div>

      );
};

export default Product;