import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { UserLogin } from "../Types/User";
import { useDispatch } from "react-redux";
import { LoginSucess } from "../Reduxs/authSlice";
import { Button } from "../../@/components/ui/button";
import { Input } from "../../@/components/ui/input";
import { useMutation } from "@tanstack/react-query";

export type SignInError = {
  email?: string;
  password?: string;
};

const Signin = () => {
  const [user, setUser] = useState<UserLogin>({ email: "", password: "" });
  const [errorSignin, setError] = useState<SignInError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();

  const history = useNavigate();

  const validate = () => {
    const newError: SignInError = {};
    if (!usersData.email) {
      newError.email = "Fullname is required field. Please fill this field.";
    }

    if (!usersData.password) {
      newError.password = "Password is required field. please fill this field";
    } else if (usersData.password.length < 6) {
      usersData.password = "Password must be at least 6 characters";
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const usersData = { ...user };

  /**
   * @version 1.0.0
   * @param userData
   * @returns response
   * @description This function is a logic of sending data to backend. we use fetch, but we should use react-query(useMutation) for control this function.
   * @description This function take a userData and send it to backend for checking more(if this account exist? or etc).
   */
  const login = async (userData: UserLogin) => {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(userData),
    });

    const response = await res.json();

    if (!res.ok) {
      throw new Error("Login failed.");
    }
    return response;
  };

  const { mutate, isPending, error } = useMutation({
    mutationFn: login,

    onSuccess: (response) => {
      localStorage.setItem("token", response.token);

      dispatch(LoginSucess(response.data));
      history("/");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  /**
   * @version 1.0.0
   * @description This function is sending a POST request(evey users data for sign in such as email & password) for sign in user and wait for response.
   * @example Use it for form submit attribute. onSubmit((e)=>SubmitForm);
   */
  const SubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidate = validate();
    if (!isValidate) {
      return;
    }

    mutate(usersData);

    if (isPending) {
      return <p>Logging in ...</p>;
    }

    if (error) {
      return <p>{error.message}</p>;
    }
  };
  return (
    <>
      <section className="w-full  h-[100vh] bg-[#07070A] text-[#F5F5F5] flex justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-0">
        <section className="w-[60%] h-auto bg-[#111116] flex gap-[10px] justify-center items-center text-[#F5F5F5] border border-[#27272A] rounded duration-[0.8s] shadow-[0_8px_20px_rgba(59,130,246,0.30)]">
          <form
            action="/"
            className="w-[50%] h-full flex flex-col gap-4 sm:gap-5 md:gap-6 items-start p-4 sm:p-5 md:p-6 lg:p-8"
            onSubmit={(e) => SubmitForm(e)}
          >
            <div className="flex flex-col justify-start items-start  gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sign in</h2>
              <p className="text-xs sm:text-sm md:text-base">
                Welcome back to head phone shop.
              </p>
            </div>

            <div className="w-full h-[1.5rem] justify-center items-center">
              {errorSignin && (
                <p className="size-full bg-red-800">
                  {errorSignin.email || errorSignin.password}
                </p>
              )}
              {error && <p className="size-full bg-red-800">{error.message}</p>}
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="email" className="text-sm sm:text-lg">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={user.email}
                placeholder="email..."
                onChange={(e) => handleChange(e)}
                className="w-full h-[2.2rem] bg-[#0D0D12] border border-[#343438] rounded-[4px]"
              ></Input>
            </div>
            <div className="w-full flex flex-col justify-cetner items-start gap-[8px] mt-[5px]">
              <label htmlFor="password" className="text-sm sm:text-lg">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password..."
                value={user.password}
                onChange={(e) => handleChange(e)}
                className="w-full h-[2.2rem] bg-[#0D0D12] border border-[#343438] rounded-[4px]"
              ></Input>
            </div>
            <div className="w-full h-[4rem] gap-2 sm:gap-3 md:gap-4 mt-1 sm:mt-2">
              <h3 className="text-sm sm:text-base md:text-lg">
                sign in with another way:
              </h3>
              <div className="w-full flex justify-around items-center mt-[5px]">
                <Link
                  to="/signingoogle"
                  className="sm:w-11 md:w-9 h-8 sm:h-9 md:h-8 bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]"
                >
                  <FcGoogle
                    to="/signingoogle"
                    size={24}
                    className="size-full flex justify-center p-[3px] "
                  />
                </Link>
                <Link
                  to="/signinfacebook"
                  className="sm:w-11 md:w-9 h-8 sm:h-9 md:h-8 bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]"
                >
                  <FaFacebook
                    to="/signinfacebook"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </Link>
                <Link
                  to="/signingithub"
                  className="sm:w-11 md:w-9 h-8 sm:h-9 md:h-8 bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]"
                >
                  <FaGithub
                    to="/signingithub"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </Link>
                <Link
                  to="/signinthreads"
                  className="sm:w-11 md:w-9 h-8 sm:h-9 md:h-8 bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]"
                >
                  <FaThreads
                    to="/signinthreads"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full h-[4rem] flex justify-between items-end mt-[10px]">
              <p className="w-full sm:w-auto max-w-[250px] text-xs sm:text-sm md:text-base float-right">
                If you don't have an account, you can{" "}
                <Link
                  to="/signup"
                  className="text-[#A855F7] duration-[0.4s] bg-[#111116] hover:bg-[#A855F7] hover:text-[#07070A] px-[5px] rounded"
                >
                  Sign up
                </Link>{" "}
                here
              </p>
              <Button
                type="submit"
                className="w-[200px] h-[50px] cursor-pointer"
              >
                Sign in
              </Button>
            </div>
          </form>
          <div className="w-[50%] h-full">
            <img
              src="https://images.openai.com/static-rsc-4/0zoDAu4hSxmbpb4BYhd2hd3Ij281Ptp4pQnwaFIjqTo25TLNE41qZh3u1eWfy3gXo0n7m_djvcUDA7xFG3qf6N8amL-hXwJ1DqI-fRkJhWGDJxofxFRH2fv11ivc8AIKi6sUPWKLbBup2u5EZtGocnI6gFFZrgQt6Ufas2O6fZzKumUOrsqVYg6Cn84YEyt7?purpose=fullsize"
              alt="Headphone Icone"
              className="w-[100%] h-full object-cover"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Signin;
