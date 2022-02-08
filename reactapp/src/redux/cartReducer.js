import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cartList: [],
        notifications: 0
    },
    reducers: {
        addProduct: (state, action) => {
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
        removeProduct: (state, action) => {
            console.log('state: cartlistremoveProduct', state.cartList);
            console.log('action: payloadremoveProduct', action.payload);
            console.log('state:removeProduct ', state);
            console.log('action:removeProduct ', action);
            console.log("reducer called removeProduct");
            return {
                ...state,
                cartList: state.cartList.filter(item => action.payload.productid !== item.productid)
            }
        },
        addNotifications: (state, action) => {
            console.log('action: in addNotifications ', action);
            return {
                ...state,
                notifications: action.payload
            }
        },
        qtyHandler: (state, action) => {
            console.log('action: type ', action.payload.type);
            console.log('action: in qtyHandler ', action);
            const typeTemp = action.payload.type.toString();
            const temp = 0;
            return {
                ...state,
                cartList: state.cartList.map(item => {
                    if (action.payload.product.productid === item.productid) {
                        if (typeTemp === "add") {
                            console.log('add: called');
                            const temp = item.quantity + 1;
                            return { ...item, quantity: temp };
                        }
                        else {
                            console.log("subtract called");
                            const temp = item.quantity - 1;
                            return { ...item, quantity: temp };
                        }
                    }
                    return item;
                })
            }
        }
    }
});

export const { addProduct, removeProduct, addNotifications, qtyHandler } = productsSlice.actions;
export default productsSlice.reducer;