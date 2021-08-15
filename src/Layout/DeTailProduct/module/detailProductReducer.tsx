import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { Shoes } from '../../../Model/IProduct';
import action from './action';

export interface ProductDetail {
  productDetail: any;
}

const initialState = {
  productDetail: {},
};

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    setProductDetail: (state, action: PayloadAction<any>) => {
      state.productDetail = action.payload;
    },
  },
});

export const { setProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;
