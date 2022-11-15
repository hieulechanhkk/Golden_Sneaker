import { useSelector } from "react-redux";
import Nike from "../../assets/nike.png";
const CardHeader = (props) => {
  return (
    <>
      <img className=" object-cover w-12" src={Nike} alt="Nike Logo" />
      <div className="flex justify-between">
        <h2>{props.title}</h2>
        <h2>{props?.totalPrice ? `$${props.totalPrice<=0 ? 0 : parseFloat(props.totalPrice).toFixed(2)}` : ""}</h2>
      </div>
    </>
  );
};  

export default CardHeader;
