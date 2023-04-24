import React from 'react'
import CartItem from './CartItem';
import './Payment.css';
import { useStateValue } from './ContextProvider';
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from './reducer';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history = useHistory();
    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        alert("Order Placed Succesfully")

        dispatch({
            type: 'EMPTY_BASKET'
        })
        history.push('/')
    }
    return (
        <div className='payment'>
            <form onSubmit={handleSubmit}>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{cart?.length} items</Link>
                    )
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <textarea style={{ width: '50%', height: "80px" }}></textarea>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {cart.map(item => (
                            <CartItem
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                    
                </div>
                

                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Subtotal & Payment Options</h3>
                    </div>
                    <div className='payment__address'>
                    <div className='payment__priceContainer'>
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                {/* Part of the homework */}
                                Subtotal ({cart?.length} items): <strong>{value}</strong>
                            </p>
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    thousandSpacing={'2s'}
                    prefix={"₹"}
                />
                <br></br>

                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Payment Method</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="none"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="UPI" />
                            <FormControlLabel value="male" control={<Radio />} label="Internet Banking" />
                            <FormControlLabel value="other" control={<Radio />} label="Cash On Delivery" />
                        </RadioGroup>
                    </FormControl>

                </div>
                    </div>
                </div>
                
                <button style={{marginLeft:'410px', marginBottom:'70px', fontSize:'25px'}}>Place Order</button>
            </div>
          </form>
        </div>
    )
}

export default Payment