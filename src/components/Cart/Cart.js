import { useSelector } from "react-redux";
import CardHeader from "../CardHeader/CardHeader";
import ListItem from "./ListItem/ListItem";
const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.count * curr.price;
  }, 0);
  return (
    <div className="block-rectangle">
      <CardHeader title={"Your cart"} totalPrice={totalPrice} />
      <ListItem />
    </div>
  );
};

export default Cart;
