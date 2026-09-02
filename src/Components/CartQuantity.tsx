import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { contextCartItem } from "../Context/CartContext";

type QuantityProp = {
  quantityCart: number;
  productId: number;
};

const CartQuantity = ({ quantityCart, productId }: QuantityProp) => {
  const cart = useContext(contextCartItem);

  console.log("🟣 CartQuantity productId:", productId);
  return (
    <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
      <h3>Quantity:</h3>

      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={() => cart?.decreaseQuantity(productId)}
      >
        <FaMinus size={20} color="#8B5CF6" />
      </button>

      <p>{quantityCart}</p>

      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={() => cart?.increaseQuantity(productId)}
      >
        <FaPlus size={20} color="#8B5CF6" />
      </button>
    </div>
  );
};

export default CartQuantity;
