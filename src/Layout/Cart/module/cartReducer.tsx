import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

export interface Cart {
  cart: [];
}

const initialState = {
  cart: [] as any,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const { cart } = state;
      const index = cart.findIndex((item: any) => {
        return (
          item.productID === payload.productID &&
          item.quantitySize.size === payload.quantitySize.size
        );
      });
      if (index === -1) {
        state.cart.push(payload);
      } else {
        state.cart[index].quantity += 1;
      }
      console.log(current(state));
      localStorage.setItem('cart', state.cart);
    },
    setCart: (state, { payload }: PayloadAction<any>) => {},
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
