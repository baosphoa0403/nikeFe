import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import action from "../../DeTailProduct/module/action";

export interface Cart {
  cart: [];
  flag: false;
  isOrderPageChange: boolean;
}

const initialState = {
  cart: [] as any,
  flag: false,
  isOrderHistoryChange: false,
};
export const cartSlice = createSlice({
  name: "cart",
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
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
        if (cart[index].quantity < cart[index].quantitySize.quantity) {
          cart[index].quantity += 1;
        } else {
          state.flag = true;
        }
      } else {
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
          state.flag = false;
        } else {
          cart.splice(index, 1);
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    removeProduct: (state, { payload }: PayloadAction<any>) => {
      const { idProduct, idSize } = payload;
      const { cart } = state;
      const index = cart.findIndex((item: any) => {
        return (
          item.productID === idProduct && item.quantitySize.size._id === idSize
        );
      });
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    updateFlag: (state, { payload }: PayloadAction<boolean>) => {
      state.flag = payload;
    },
    setIsOrderHistoryChange: (state, payload: PayloadAction<boolean>) => {
      state.isOrderHistoryChange = !state.isOrderHistoryChange;
    },
  },
});

export const {
  addToCart,
  setCart,
  incrementAndDecrease,
  removeProduct,
  updateFlag,
  setIsOrderHistoryChange,
} = cartSlice.actions;
export default cartSlice.reducer;
