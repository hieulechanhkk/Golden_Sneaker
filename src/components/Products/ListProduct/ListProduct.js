import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, setScroll } from "../../../redux/actions/cartActions";
import Check from "../../../assets/check.png";

// Animation
import { motion } from "framer-motion";
import Scroll from "../../Animation/Scroll";

const ListProduct = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const handleAddToCart = (data) => {
    dispatch(addToCart({ ...data, count: 1 }));
    dispatch(setScroll(true))
  };
  const showItem = props?.data?.map((item) => {
    return (
      <Scroll key={item.id} >
        <div className="item">
          <div
            style={{
              backgroundColor: `${item.color}`,
              borderRadius: "20px",
              padding: "2.5rem 2px",
            }}
          >
            <img className="item-image" src={item.image} />
          </div>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <div className="flex justify-between items-center">
            <h3>${parseFloat(item.price).toFixed(2)}</h3>
            {cart.find((x) => x.id === item.id) ? (
              <div className="rounded-full bg-yellow p-3">
                <div className="w-5">
                  <img src={Check} />
                </div>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.9, transition: 500 }}
                className="item-btn"
                onClick={() => handleAddToCart(item)}
              >
                ADD TO CART
              </motion.div>
            )}
          </div>
        </div>
      </Scroll>
    );
  });
  return (
    <div className=" overflow-y-auto pb-8 flex flex-col gap-16 overflow-x-hidden hide-scrollbar">
      {showItem}
    </div>
  );
};

export default ListProduct;
