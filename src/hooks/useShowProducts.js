import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addProducts } from '../feature/shop-cart/productSlice';

const useShowProducts = () => {
    const dispatch = useDispatch();
    const fetchData = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      dispatch(addProducts(json))
    };
    useEffect(() => {
      fetchData();
    }, []);
}

export default useShowProducts