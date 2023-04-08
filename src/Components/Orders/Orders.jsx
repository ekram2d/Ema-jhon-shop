import React, { useState } from 'react';
import Cards from '../Cards/Cards';
import { useLoaderData } from 'react-router-dom';
import Reviewitem from '../Cards/Reviewitem/Reviewitem';
import { key } from 'localforage';
import { deletedata } from '../../../Ustilites/Utilities';

const Orders = () => {
      let  loadproducts = useLoaderData();
      // console.log(products);
      const [products,setProducts]=useState(loadproducts);
      const deletebtn=(getProduct)=> {

            let reaminginProducts=products.filter((pd)=>pd.id != getProduct.id);
            // console.log(reaminginProducts);
            setProducts(reaminginProducts);
            deletedata(getProduct.id,0);

      }
      console.log(products);
      return (
            <div className='lg:flex  px-9 gap-4'>
            <div className='w-[60%] mt-8 space-y-7 '>
                  {
                        products.map(card=><Reviewitem key={card.id} card={card} deletebtn={deletebtn}></Reviewitem>)
                  }
            </div>

            <div className='w-[30%] bg-amber-200 p-2 mt-4'>

                  
                        <Cards  product={products} ></Cards>
                  
            </div>

      </div>
      );
};

export default Orders;