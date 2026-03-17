import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState: { cartItems: [] },
    reducers:{
        addToCart:(state, action) =>{
             const item = state.cartItems.find((i:any) => i.id ===action.payload.id)
             item ? item.quantity++  : state.cartItems.push({...action.payload, quantity:1})
        },
    }
})
export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;