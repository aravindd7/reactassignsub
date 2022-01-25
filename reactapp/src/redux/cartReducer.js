import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const productsSlice = createSlice({
 name: 'products',
 initialState: {
     cartList: [],
 },
 reducers: {
     addProduct: (state,action) => {
         console.log('state: cartlist', state.cartList);
         console.log('action: payload', action.payload);
         console.log('state: ', state);
         console.log('action: ', action);
         console.log("reducer called");
         return {
             ...state,
             cartList: state.cartList.concat(action.payload)
         }

     },
     removeProduct: (state,action) => {
        console.log('state: cartlistremoveProduct', state.cartList);
        console.log('action: payloadremoveProduct', action.payload);
        console.log('state:removeProduct ', state);
        console.log('action:removeProduct ', action);
        console.log("reducer called removeProduct");
        return {
            ...state,
            cartList: state.cartList.filter(item => action.payload.productid !== item.productid)
        }
     }
 }
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;