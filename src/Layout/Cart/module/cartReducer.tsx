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
          item.quantitySize.size._id === payload.quantitySize.size._id
        );
      });
      if (index === -1) {
        state.cart.push(payload);
      } else {
        state.cart[index].quantity += 1;
      }
      // console.log(current(state));
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    setCart: (state, { payload }: PayloadAction<any>) => {
      state.cart = payload;
    },
    incrementAndDecrease: (state, { payload }: PayloadAction<any>) => {
      console.log(payload);
      const { flag, id, idSize } = payload;
      const { cart } = state;
      const index = cart.findIndex((item: any) => {
        return item.productID === id && item.quantitySize.size._id === idSize;
      });
      if (flag) {
        cart[index].quantity += 1;
      } else {
        if (cart[index].quantity > 0) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1);
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    },
  },
});

export const { addToCart, setCart, incrementAndDecrease } = cartSlice.actions;
export default cartSlice.reducer;
