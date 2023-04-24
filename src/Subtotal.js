import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from './ContextProvider';
import { getCartTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className='subtotal'>
         <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        thousandSpacing={'2s'}
        prefix={"₹"}
      />

      <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal