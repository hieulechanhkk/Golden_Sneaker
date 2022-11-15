import React from "react";
import { useSelector } from "react-redux";
import "../../stylesheet/Products.css";
import CardHeader from "../CardHeader/CardHeader";
import ListProduct from "./ListProduct/ListProduct";

const Products = (props) => {
  const { products } = useSelector(state => state.product);
  return (
    <div className="block-rectangle">
      <CardHeader title={"Our Products"} />
      <ListProduct data={products}/>
    </div>
  );
};

export default Products;
