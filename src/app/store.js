import { configureStore } from "@reduxjs/toolkit";
import reducerProduct from "../feature/shop-cart/productSlice";
import reducerCart from "../feature/shop-cart/cartSlice";

const store = configureStore({
    reducer:{
        products: reducerProduct,
        cart: reducerCart
    }
})

export default store;