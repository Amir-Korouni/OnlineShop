import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { contextCartItem } from "../Context/CartContext";

type quantityProp = {
  quantityCart: number;
  cartId: number;
};

const CartQuantity = ({ quantityCart, cartId }: quantityProp) => {
  const cart = useContext(contextCartItem);

  return (
    <div className="w-[50%] h-[10vh] flex justify-center items-center gap-2">
      <h3>Quantity: </h3>
      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={() => cart?.decreaseQuantity(cartId)}
      >
        <FaMinus size={20} color="#8B5CF6" />
      </button>
      <p>{Number(quantityCart)}</p>
      <button
        className="w-[30px] h-[30px] cursor-pointer bg-[#07070A] text-zinc-950 rounded flex justify-center items-center"
        onClick={() => cart?.increaseQuantity(cartId)}
      >
        <FaPlus size={20} color="#8B5CF6" />
      </button>
    </div>
  );
};

export default CartQuantity;
