import { getCart } from "@/api/Cart";
import type { CartResponse } from "@/Pages/Cart";
import { useQuery } from "@tanstack/react-query";

export function useCartGet() {
  return useQuery<CartResponse>({
    queryKey: ["Cartkey"],
    queryFn:  getCart,
  });
}
