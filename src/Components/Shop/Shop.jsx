import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cards from '../Cards/Cards';

const Shop = () => {

      const [products, setProducts] = useState([]);
      const [product,setProduct]=useState([]);
      useEffect(() => {
            fetch("products.json")
                  .then(res => res.json())
                  .then((products) => setProducts(products));
      }, [])



      const btnClick=(id)=>{
            let ob=[...product,id]
            
            setProduct(ob);
      }
      // console.log(product)

      return (
            <div className='lg:flex  px-9'>
                  <div className='w-[80%] lg:grid lg:grid-cols-3 mt-8 '>
                        {
                              products.map(product => <Product key={product.id} product={product} btnClick={btnClick}></Product>)
                        }
                  </div>

                  <div className='w-[20%] bg-amber-200 p-2'>
                        <p>Order summary:{product.length}</p>
                  {
                              product.map(product =>  <Cards key={product.id} product={product}></Cards>)
                        }
                  </div>

            </div>
      );
};

export default Shop;