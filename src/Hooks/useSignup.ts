import { postSignup } from "@/api/Signup";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const history = useNavigate();

  return useMutation({
    mutationFn: postSignup,

    onSuccess: (response) => {
      console.log(response);
      console.log("New User was added.");
      history("/signin");
    },

    onError: (err) => {
      console.log(err.message);
    },
  });
}
