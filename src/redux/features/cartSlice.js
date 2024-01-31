import {createSlice, current} from "@reduxjs/toolkit";

const cart = {
    items: [],
    totalQuantity: 0,
    totalMoney: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: cart,
    reducers: {
        addProduct: (state, action) => {
            const prod = action.payload;
            state.items.push(prod);
            state.totalMoney += prod.price;
            state.totalQuantity += 1;
        }
    }
})

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;