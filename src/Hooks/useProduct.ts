import {
  getProductApi,
  getProductDetailApi,
  postProductApi,
} from "@/api/Product";
import type { ProductResponse } from "@/Components/HomeSections/FeataredProduct";
import { addToCart } from "@/Reduxs/cartSlice";
import type { Product } from "@/Types/Product";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

export type ProductResponseDetail = {
  success: boolean;
  data: Product;
};

export function useProductGet() {
  return useQuery<ProductResponse>({
    queryKey: ["productsPage"],
    queryFn: getProductApi,
  });
}

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

export function useProductDetail(id: string) {
  return useQuery<ProductResponseDetail>({
    queryKey: ["productDetail", id],
    queryFn: () => getProductDetailApi(id),
  });
}
