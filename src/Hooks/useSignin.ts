import { postSignin } from "@/api/Signin";
import { LoginSucess } from "@/Reduxs/authSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useSignin() {
  const dispatch = useDispatch();
  const history = useNavigate();

  return useMutation({
    mutationFn: postSignin,

    onSuccess: (response) => {
      localStorage.setItem("token", response.token);

      dispatch(LoginSucess(response.data));
      history("/");
    },

    onError: (err) => {
      console.log(err.message);
    },
  });
}
