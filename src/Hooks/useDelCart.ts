import { deleteCartApi } from "@/api/Cart";
import { removeFromCart } from "@/Reduxs/cartSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useDelCart() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: deleteCartApi,

    onSuccess: (id) => {
      dispatch(removeFromCart(id));
    },

    onError: (err) => {
      console.log(err.message);
    },
  });
}
