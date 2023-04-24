 
import React from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { useStateValue } from './ContextProvider';
import Subtotal from './Subtotal';
import Form from './Form';

function Cart() {
  const [{ cart , user}, dispatch] = useStateValue();
  return (
    <div className='cart'>
        <div className='cart-left'>
            <img className='cart-ad'
             src="https://previews.123rf.com/images/avgust01/avgust011903/avgust01190300027/118788771-advertisement-web-banner-for-summer-sale-horizontal-banner-with-realistic-glass-bottle-with-message-.jpg"
             alt="not found" />
              <h3>Hello, {user ? user.email : "Guest"}</h3>
             <h2 className='cart-title'>Your Shopping Cart</h2>
             {cart.map(item => (
              <CartItem 
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              // <CartItem 
              //   title='h'
              //   image='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
              //   price='34'
              //   rating='5'
              //   />
             ))}
        </div>
        <div className='cart-right'>
           <Subtotal />
        </div>
        
    </div>
  )
}

export default Cart