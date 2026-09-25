import { postProductApi } from "@/api/Product";
import { addToCart } from "@/Reduxs/cartSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export function useProduct() {
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: postProductApi,

    onSuccess: (response) => {
      dispatch(addToCart(response));
    },

    onError: (err) => {
      console.log("Add to cart error:", { err });
    },
  });
}
