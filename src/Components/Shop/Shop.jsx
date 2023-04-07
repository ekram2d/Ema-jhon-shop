import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cards from '../Cards/Cards';
import { setdata } from '../../../Ustilites/Utilities';

const Shop = () => {

      const [products, setProducts] = useState([]);
      const [product, setProduct] = useState([]);
      useEffect(() => {
            fetch("products.json")
                  .then(res => res.json())
                  .then((products) => setProducts(products));
      }, [])

      useEffect(() => {
            const storcart = JSON.parse(localStorage.getItem("store"));

            let newarray = [];
            for (let id in storcart) {
                  let savedproduct = products.find((data) => data.id === id);
                  if (savedproduct) {
                        savedproduct.quantity = storcart[id];
                        newarray.push(savedproduct);
                  }
              

            }
            console.log(newarray);
            setProduct(newarray);
      }, [products])
      // console.log(product);
      const btnClick = (getProduct) => {
            // let ob = [...product, id]
            let newproduct=[];
            const exits  = product.find((pd)=>pd.id===getProduct.id)
            if(!exits) {
           getProduct.quantity=1;
           newproduct=[...product,getProduct];
       
            }else{
                  exits.quantity = exits.quantity +1;
                  const updateProduct=product.filter(pd=>pd.id!=getProduct.id);
                  newproduct = [...updateProduct,exits];

            }

            setProduct(newproduct);
            setdata(getProduct.id, getProduct.price);

      }
      // console.log(product)

      return (
            <div className='lg:flex  px-9 '>
                  <div className='w-[80%] lg:grid lg:grid-cols-3 mt-8 '>
                        {
                              products.map(product => <Product key={product.id} product={product} btnClick={btnClick}></Product>)
                        }
                  </div>

                  <div className='w-[20%] bg-amber-200 p-2'>

                        {
                              <Cards key={product.id} product={product}></Cards>
                        }
                  </div>

            </div>
      );
};

export default Shop;