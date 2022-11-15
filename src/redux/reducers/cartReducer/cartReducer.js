import * as Types from "../../types/cartTypes";

const initialState = {
  //SSR
  cart: JSON.parse(localStorage.getItem("cart"))?.cart ? JSON.parse(localStorage.getItem("cart"))?.cart : [],

  //CSR
  scroll: false
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_CART:
        return {
            ...state,
            cart: [...state.cart, ...action.payload.data.data]
        }
    case Types.ADD_TO_CART:
      localStorage.setItem("cart", JSON.stringify({
        ...state,
        cart: [...state.cart, action.payload.data]
      }));
      return {
        ...state,
        cart: [...state.cart, action.payload.data],
      };
    case Types.UPDATE.increase:
      let _cart = [...state.cart];
      _cart[action.payload.data.index] = action.payload.data.data;
      localStorage.setItem("cart", JSON.stringify({
        ...state,
        cart: _cart,
      }));
      return {
        ...state,
        cart: _cart,
      };
    case Types.UPDATE.decrease:
      let __cart = [...state.cart];
      __cart[action.payload.data.index] = action.payload.data.data;
      localStorage.setItem("cart", JSON.stringify({
        ...state,
        cart: __cart,
      }))
      return {
        ...state,
        cart: __cart,
      };
    case Types.DELETE:
      let ___cart = [...state.cart];
      ___cart.splice(action.payload.index, 1);
      localStorage.setItem("cart", JSON.stringify({
        ...state,
        cart: ___cart,
      }))
      return {
        ...state,
        cart: ___cart,
      };
    case Types.SET_SCROLL:
        return {
            ...state,
            scroll: action.payload.toggle
        }

    default:
      return state;
  }
};

export default cartReducer;
