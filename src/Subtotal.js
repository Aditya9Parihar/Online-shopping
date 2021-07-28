import React from "react";
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import { useStateValue } from "./StateProvider";
import { getBasketSubtotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => history.push('/proceedToCheckout')}>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
