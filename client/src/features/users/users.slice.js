import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    tip: 0.18,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setTip(state, action) {
            state.tip = action.payload;
        },
        addItemToLocalCart(state, action) {
            const item = action.payload;
            let cart = JSON.parse(localStorage.getItem("cart") || "[]");

            const index = cart.findIndex((target) => target.id === item.id);
            if (index === -1) {
                cart.push(item);
            } else {
                cart[index] = item;
            }

            state.cart = cart;
            localStorage.setItem("cart", JSON.stringify(cart));
        },
        incrementQty(state, action) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const index = cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if (cart[index].qty + action.payload.amt > 0) {
                cart[index].qty += action.payload.amt;
            }

            state.cart = cart;
            localStorage.setItem("cart", JSON.stringify(cart));
        },
        deleteFromLocalCart(state, action) {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            const updatedCart = cart.filter(
                (item) => item.id !== action.payload
            );

            state.cart = updatedCart;
            localStorage.setItem("cart", JSON.stringify(updatedCart));
        },
        updateLocalCart(state, action) {
            state.cart = JSON.parse(localStorage.getItem("cart") || "[]");
        },
    },
});

// functions
export const getTip = (state) => state.users.tip;
export const getLocalCart = (state) => state.users.cart;

// actions
export const {
    setTip,
    initLocalCart,
    addItemToLocalCart,
    incrementQty,
    deleteFromLocalCart,
    updateLocalCart,
} = usersSlice.actions;

// export reducer
export default usersSlice.reducer;
