import { postCheckoutApi } from "@/api/Checkout";
import { clearCart } from "@/Reduxs/cartSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useCheckout() {
  const dispatch = useDispatch();
  const history = useNavigate();

  return useMutation({
    mutationFn: postCheckoutApi,

    onSuccess: (response) => {
      console.log(response);
      dispatch(clearCart(response));
      history("/orders");
    },

    onError: (err) => {
      console.log(err.message);
    },
  });
}
