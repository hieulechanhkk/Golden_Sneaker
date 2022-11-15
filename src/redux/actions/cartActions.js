import * as Types from "../types/cartTypes";

const setCartData = (data) => ({
    type: Types.SET_CART,
    payload: {data}
})
const addToCart = (data) => ({
  type: Types.ADD_TO_CART,
  payload: { data },
});
const increase = (data) => ({
  type: Types.UPDATE.increase,
  payload: {data},
});
const decrease = (data) => ({
  type: Types.UPDATE.decrease,
  payload: {data},
});
const deleteCart = (index) => ({
    type: Types.DELETE, 
    payload: {index}
})

// SCR 
const setScroll = (toggle) => ({
    type: Types.SET_SCROLL,
    payload: { toggle }
})
export { setCartData,addToCart, increase, decrease, deleteCart, setScroll };
