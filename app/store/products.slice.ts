import { ProductState } from "@interface/products";
import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./api.slice";

const productState: ProductState = {
  list: [],
  total: 0,
  showbutton: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState: productState,
  reducers: {
    updateProducts: (state, action) => ({
      ...state,
      list: action.payload.list,
      total: action.payload.total,
      showbutton: action.payload.showbutton,
    }),
  },
});

export const { updateProducts } = productSlice.actions;
export default productSlice.reducer;

/** API CALLS */

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    GetProducts: builder.mutation({
      query: (args) => ({
        url: `/products/?limit=${args.limit}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsMutation } = productApiSlice;
