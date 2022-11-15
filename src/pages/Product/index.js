import React from "react";
import Cart from "../../components/Cart/Cart";
import Products from "../../components/Products/Products";

const Product = () => {
  const shoesData = {
    shoes: [],
  };
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center z-50 my-4 gap-10 sm:flex-col md:flex-row">
      <Products/>
      <Cart/>
    </div>
  );
};

export default Product;
