import type { UserRegister } from "@/Types/User";
import { apiClient } from "./Client";

export async function postSignup(SignupBody: UserRegister) {
  const response = await apiClient.post("/auth/register", { ...SignupBody });
  return response.data;
}
