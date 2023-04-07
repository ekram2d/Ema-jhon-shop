import React from 'react';

const Product = ({ product,btnClick }) => {
      // console.log(product);
      const { id, img, name, price, seller } = product;
      return (

            <div className='border rounded-lg   w-52 h-96 relative'>
                  <div className='p-2'>
                        <img className='w-56' src={img}></img>

                        <h1 >{name}</h1>
                        <p>{price}</p>
                        <p >{seller}</p>
                  </div>


                  <button className='rounded-lg bg-orange-400 w-full absolute bottom-0' onClick={()=>btnClick(product)}>Add to chart</button>

            </div>

      );
};

export default Product;