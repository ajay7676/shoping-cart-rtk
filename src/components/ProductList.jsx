import React, { useEffect } from "react";
import Nvabar from "./Nvabar";
import { useDispatch, useSelector } from "react-redux";
import {  } from "react-dom";
import { fetchProducts } from "../feature/shop-cart/productSlice";
import { addToCart } from "../feature/shop-cart/cartSlice";
// import {useNavigate   } from "react-router";



const ProductList = () => {
  const dispatch = useDispatch();
  const{productList , status} =   useSelector(store => store?.products);

  useEffect(() => {
      if (status ==="idle") {
          dispatch(fetchProducts());
      }
  }, [status])

  if(status === "Loading") return <p style={{color: "#fff"}}>Loading Product..</p>
  if(status === "Failed") return <p style={{color: "#fff"}}>Faile to load Products. Please try again</p>

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }
  
  return (
    <>
      <Nvabar />
      <div className="product-list">
        {
          productList.map((product) => {
            const maxLength = 20;
            const shouldTruncate = product.title.length > maxLength;
            return(
              
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt="image title" />
                    <h2>
                    {shouldTruncate ? `${product.title.substring(0, maxLength)}...` : product.title}
                    </h2>
                    <p>Price : ${product.price} </p>
                    <button className="" onClick={() =>handleAddToCart(product)}>Add To Cart</button>
                  </div>
              
            )
          })
        }
      </div>
    </>
  );
};

export default ProductList;
