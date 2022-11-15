import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../../../assets/trash.png";
import {
  decrease,
  deleteCart,
  increase,
  setCartData,
  setScroll,
} from "../../../redux/actions/cartActions";
import { motion } from "framer-motion";
import Scroll from "../../Animation/Scroll";

const ListItem = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  const scroll = useSelector((state) => state.cart.scroll)
  const newItemRef = useRef(null);
  const handleIncrease = (index, data) => {
    dispatch(setScroll(false))
    dispatch(
      increase({ index: index, data: { ...data, count: data.count + 1 } })
    );
  };
  const handleDecrease = (index, data) => {
    let count = data.count;
    dispatch(setScroll(false))
    if (data.count - 1 <= 0) dispatch(deleteCart(index));
    else {
      dispatch(decrease({ index: index, data: { ...data, count: count - 1 } }));
    }
  };
  const scrollIntoNewItem = () => {
    newItemRef.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (scroll) scrollIntoNewItem();
  }, [data]);
  const showItem = () => {
    return data.length > 0 ? (
      data.map((item, index) => {
        return (
          <div key={index} className="flex items-center justify-between gap-8">
            <Scroll scroll="translateX(-300px)">
              <div
                className="rounded-full w-24 h-24 shadow-md"
                style={{ backgroundColor: `${item.color}` }}
              >
                <div className=" w-32 h-36 -translate-x-4 -translate-y-6">
                  <img
                    className=" -rotate-[30deg] w-full h-full"
                    src={item.image}
                    alt="Cart Item Image"
                  />
                </div>
              </div>
            </Scroll>
            <div className="gap-2 flex flex-col flex-1">
              <Scroll scroll="translateX(1000px)">
                <h4>{item.name}</h4>
              </Scroll>
              <Scroll scroll="translateX(700px)">
                <h3>${parseFloat(item.price).toFixed(2)}</h3>
              </Scroll>
              <Scroll>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        handleDecrease(index, item);
                      }}
                      className=" select-none cursor-pointer rounded-full flex justify-center items-center w-8 h-8 text-center hover:shadow-md font-extrabold text-xl bg-lightGray"
                    >
                      -
                    </motion.div>
                    <span>{item.count}</span>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        handleIncrease(index, item);
                      }}
                      className=" select-none cursor-pointer rounded-full flex justify-center items-center w-8 h-8 text-center hover:shadow-md font-extrabold text-xl bg-lightGray"
                    >
                      +
                    </motion.div>
                  </div>
                  <motion.div
                    whileTap={{ scale: 0.9, transition: 1 }}
                    className="rounded-full p-2 bg-yellow cursor-pointer hover:shadow-md"
                    onClick={() => {
                      dispatch(setScroll(false))
                      dispatch(deleteCart(index));
                    }}
                  >
                    <div className="w-4 h-4">
                      <img src={Trash} alt="Trash logo" />
                    </div>
                  </motion.div>
                </div>
              </Scroll>
            </div>
          </div>
        );
      })
    ) : (
      <span>Your cart is empty</span>
    );
  };
  return (
    <div className=" overflow-y-scroll pb-8 flex flex-col gap-10 overflow-x-hidden h-5/6 hide-scrollbar">
      {showItem()}
      <div ref={newItemRef}></div>
    </div>
  );
};

export default ListItem;
