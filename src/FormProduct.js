import React from 'react';
import { useStateValue } from './ContextProvider';
import './Product.css';

function FormProduct({ title, image, price, rating }) {
    const [{ cart }, dispatch] = useStateValue();
    // console.log("this is cart>>", cart)
    const addToCart = () =>{
        //dispatch item in data layer
        dispatch({
            type: "ADD_TO_CART",
            item: {
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

  return (
    <div className='product'>
        <div className='product-info'>
            <p>{title}</p>
            <p className='product-price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product-rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p> 
                ))}
              
            </div>
         </div>
     <img src={image}
               alt='' />

     <button onClick={addToCart}>Add to Cart</button>   
        
    </div>
  )
}

export default FormProduct