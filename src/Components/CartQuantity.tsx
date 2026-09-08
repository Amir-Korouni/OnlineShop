import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../Reduxs/cartSlice";

type QuantityProp = {
  quantityCart: number;
  productId: number;
};

const CartQuantity = ({ quantityCart, productId }: QuantityProp) => {
  const dispatch = useDispatch();

  /**
   * @version 1.0.0
   * @description This function used for increasing product in cart and sync with database.
   */
  const handleIncrease = async () => {
    const newQuantity = quantityCart + 1;
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/cart/items/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity: newQuantity,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.log("Couldn't increase quantity:", result);
        return;
      }

      dispatch(increaseQuantity(productId));
    } catch (error) {
      console.log("❌ Increase error:", error);
    }
  };

  /**
   * @version 1.0.0
   * @description This function used for decreaseing product in cart and sync with database.
   */
  const handleDecrease = async () => {
    const newQuantity = quantityCart - 1;

    if (newQuantity <= 0) {
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:4000/cart/items/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity: newQuantity,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        console.log("Couldn't decrease quantity:", result);
        return;
      }

      dispatch(decreaseQuantity(productId));
    } catch (error) {
      console.log("❌ Decrease error:", error);
    }
  };
  return (
    <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
      <h3>Quantity:</h3>

      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={handleDecrease}
      >
        <FaMinus size={20} color="#8B5CF6" />
      </button>

      <p>{quantityCart}</p>

      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={handleIncrease}
      >
        <FaPlus size={20} color="#8B5CF6" />
      </button>
    </div>
  );
};

export default CartQuantity;
