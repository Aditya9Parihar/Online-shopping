import React from "react";
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, price, rating, image}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

  return (
    <div className="checkout_Product">
      <img src={image} alt="" className="checkout_productImage" />
      <div className="checkout_productInfo">
        <p className="checkout_productTitle">{title}</p>
        <p className="checkout_productPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout_productRating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkout_productButton">Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
