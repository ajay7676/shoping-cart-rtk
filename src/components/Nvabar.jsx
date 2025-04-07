import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Nvabar = () => {
  const cartItem =   useSelector(store => store?.cart?.items);
  return (
    <nav>
       <h1>Shopping Cart</h1>
       <div>
         <Link to="/"> Home</Link>
         <Link to="/cart"> Cart <span className='cart-number'> {cartItem.length}</span></Link>
       </div>
    </nav>
  )
}

export default Nvabar