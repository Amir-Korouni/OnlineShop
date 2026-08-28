import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import type { UserLogin } from "../Types/User";
import { AuthContext } from "../Context/ContextProvider";

type SignInError = {
  email?: string;
  password?: string;
};

const Signin = () => {
  const [user, setUser] = useState<UserLogin>({ email: "", password: "" });
  const [error, setError] = useState<SignInError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const usersContext = useContext(AuthContext);

  const history = useNavigate();

<<<<<<< Updated upstream
  const validate = () => {
    const newError: SignInError = {};

    if (!User.email) {
      newError.email = "Email is required field. please fill this field.";
    } else if (!/\S+@\S+\.\S+/.test(User.email)) {
      newError.email = "Enter a valid email";
    }

    if (!User.password) {
      newError.password = "Password is required field. please fill this field";
    } else if (User.password.length < 6) {
      User.password = "Password must be at least 8 characters";
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const UsersData = { ...User };
  const SubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validate();

    if (!isValid) {
      return;
    }

    fetch("http://localhost:8000/Login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(UsersData),
    })
      .then(async (res) => {
        const data = await res.json();
=======
  const usersData = { ...user };

  /**
   * @version 1.0.0
   * @description This function is sending a POST request(evey users data for sign in such as email & password) for sign in user and wait for response and then it works.
   * @example Use it for form submit attribute. onSubmit((e)=>SubmitForm);
   */
  const SubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("🔥 FORM SUBMITTED");
>>>>>>> Stashed changes

    usersContext?.setUser({
      email: user.email,
      password: user.password,
    });

    history("/");
    console.log("🔥 USER SET");
    console.log("🔥 USER SET");

    // fetch("http://localhost:8000/Login", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify(usersData),
    // })
    //   .then(async (res) => {
    //     const data = await res.json();

    //     console.log("STATUS:", res.status);
    //     console.log("SERVER RESPONSE:", data);

    //     if (!res.ok) {
    //       throw new Error(data.message || "any problem is exist.");
    //     }

    //     return data;
    //   })
    //   .then((response) => {
    //     console.log("API data" + response);

    //     usersContext?.setUser(response);

    //     console.log("BEFORE NAVIGATE:", usersContext?.users);

    //     history("/");
    //   })
    //   .catch((err: Error) => {
    //     console.log(err.message);
    //   });
  };
  console.log(usersContext?.users?.email, usersContext?.users?.password);
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

            <div className="w-full h-[1.5rem]">
              {error && (
                <p className="size-full bg-red-800">
                  {error.email || error.password}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="Email" className="text-sm sm:text-lg">
                Email
              </label>
              <input
                name="email"
                type="email"
<<<<<<< Updated upstream
                value={User.email}
=======
                value={user.email}
                // required
>>>>>>> Stashed changes
                onChange={(e) => handleChange(e)}
                className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#27272A] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
              />
            </div>
            <div className="w-full flex flex-col justify-cetner items-start gap-[8px] mt-[5px]">
              <label htmlFor="Password" className="text-sm sm:text-lg">
                Password
              </label>
              <input
                name="password"
                type="password"
<<<<<<< Updated upstream
                value={User.password}
=======
                // required
                value={user.password}
>>>>>>> Stashed changes
                onChange={(e) => handleChange(e)}
                className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#27272A] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
              />
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
              <button
                type="submit"
                className="w-[180px] h-[50px] bg-[#8B5CF6] cursor-pointer rounded hover:bg-[#A855F7] transition-colors duration-300"
              >
                Sign in
              </button>
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
