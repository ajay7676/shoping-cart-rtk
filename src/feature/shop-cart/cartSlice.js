import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Final cart items
        tempItems: [],
        totoalPrice: 0
    },
     reducers: {
        addToCart: (state , action) =>{
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity+=1;
            }
            else{
                state.items.push({...action.payload , quantity: 1});
            }
            state.tempItems=[...state.items];
            state.totoalPrice = state.items.reduce((sum,item) => sum+item.price*item.quantity, 0)
        }
     }
})

export const {addToCart} = cartSlice.actions;


export default cartSlice.reducer;