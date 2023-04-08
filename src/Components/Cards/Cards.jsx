import React from 'react';

const Cards = ({product}) => {
      // console.log(product);


      let total =0 ;
      let totalShiping=0;
      for(let i of product) {
            // i.quantity=i.quantity || 1;
            total+=(i.price*i.quantity);
            totalShiping+=i.shipping;
      } 
      const tax = total*7/100;
      const grandTotal = total+totalShiping+tax;
      return (
            <div className='border  shadow-lg p-4 bg-white sticky top-0'>
                 <h4 className='text-center font-bold'>Order Summary</h4>
                 <p>selected Items : {product.length}</p>
                 <p>Total Price : ${total}</p>
                 <p>Total shipping:${totalShiping} </p>
                 <p>Tax: ${tax.toFixed(2)}</p>
                 <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            </div>
      );
};

export default Cards;