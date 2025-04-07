import React from "react";
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

const Cart = () => {
 const navigate = useNavigate();
  const {items:cartItem , tempItems , totoalPrice} = useSelector((store) => store?.cart);
  console.log(cartItem);

  return (
    <>
      <div className="cart-wrapper">
        <div className="cart-page-container">
          <div className="cart-container">
            <h2>Your Cat</h2>
            {cartItem.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div>
                    <input type="number" value={item.quantity} min={1} />
                    <button>Update</button>
                    <button>Remove</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Total : ${totoalPrice}</p>
              <button className="back-button" onClick={() => navigate('/')}>Back to Shoping </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
