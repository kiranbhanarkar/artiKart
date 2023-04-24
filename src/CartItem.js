import React from 'react'
import './CartItem.css'
import { useStateValue } from './ContextProvider';

function CartItem({ image, title, price, rating}) {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            title: title,
        })
    }
  return (
    <div className='cart-item'>
        <img className='cart-item-image' src={image} />

        <div className='cart-item-info'>
            <p className='cart-item-title'>{title}</p>

            <p className='cart-item-price'><small>₹</small>
                <strong>{price}</strong></p>
            <div className='cart-item-rating'>
              {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p> 
                ))}
             </div> 
            <button onClick={removeFromCart}>Remove From Cart</button>   
        </div>
    </div>
  )
}

export default CartItem