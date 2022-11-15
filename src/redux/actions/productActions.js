import * as Types from "../types/productTypes";

const setProduct = (data) => ({
  type: Types.SET_PRODUCTS,
  payload: { data },
});

export { setProduct };
