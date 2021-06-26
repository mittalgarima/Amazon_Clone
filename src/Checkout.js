import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format'

function Checkout() {
    const [{basket,user}]= useStateValue();
    return (
        <div className="checkout">
        <div className="checkout_left">
        <img className="checkout_ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/Watches/EMICreative/Images/3-month_NCEMI_for_APay_later.jpg"
        alt=""  />
        <h3>Hello,{user?.email}</h3>
        {basket?.length === 0? (
            <div>
                <h2>YOUR SHOPPING BASKET IS EMPTY</h2>
                <p> You have no items in your basket . To buy one
                or more items . </p>
            </div>
        ):( 
              <div>
        <h2 className="cheackout_title">Your Shopping Basket</h2>
       {basket?.map((item) =>(
           <CheckoutProduct
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
           />
       ))}
       
        </div>
        )}

        </div>
        {basket.length > 0 &&(
        <div className="checkout_right">
           
            <Subtotal/>
        </div>

        )}
           
        </div>
    );
}

export default Checkout;
