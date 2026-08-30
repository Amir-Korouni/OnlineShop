import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartQuantity = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const handleIncreamentQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreamenetQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
      <h3>Quantity: </h3>
      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={handleDecreamenetQuantity}
      >
        <FaMinus size={20} color="#8B5CF6" />
      </button>
      <p>{quantity}</p>
      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={handleIncreamentQuantity}
      >
        <FaPlus size={20} color="#8B5CF6" />
      </button>
    </div>
  );
};

export default CartQuantity;
