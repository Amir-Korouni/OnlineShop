import { getCartApi } from "@/api/Cart";
import type { CartResponse } from "@/Pages/Cart";
import { useQuery } from "@tanstack/react-query";

export function useCartGet(token: string) {
  return useQuery<CartResponse>({
    queryKey: ["Cartkey"],
    queryFn: () => getCartApi(token),
  });
}
