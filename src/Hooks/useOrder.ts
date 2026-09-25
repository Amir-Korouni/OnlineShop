import { getOrder, getOrderDetails } from "@/api/Orders";
import { useQuery } from "@tanstack/react-query";

type OrderGet = {
  id: number;
  totalAmount: string;
  status: "PENDING" | "PROCESSING" | "SHIPPED" | "CANCELLED" | "DELIVERED";
};

export type OrderResponseGet = {
  success: boolean;
  data: OrderGet[];
};

export function useOrderGet() {
  return useQuery<OrderResponseGet>({
    queryKey: ["Orders"],
    queryFn: getOrder,
  });
}

type Order = {
  id: number;
  totalAmount: string;
  status: string;
};

type OrderResponse = {
  success: boolean;
  data: Order;
};

export function useOrderDetail(id: string, token: string) {
  return useQuery<OrderResponse>({
    queryKey: ["OrderDetail", id],
    queryFn: () => getOrderDetails(id, token),
  });
}
