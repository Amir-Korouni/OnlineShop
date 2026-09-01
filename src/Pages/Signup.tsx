import { useState } from "react";
import type { UserRegister } from "../Types/User";
import { Link, useNavigate } from "react-router-dom";
import InputsForm from "../Components/Forms/InputsForm";
type SignUpError = {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
};

const Signup = () => {
  const [SignUpUser, setSignUpUser] = useState({} as UserRegister);
  const [error, setError] = useState<SignUpError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpUser({ ...SignUpUser, [e.target.name]: e.target.value });
  };

  const history = useNavigate();

  const validate = () => {
    const newError: SignUpError = {};
    if (!SignUpBody.fullname) {
      newError.fullname = "Fullname is required field. Please fill this field.";
    }

    if (!SignUpUser.username) {
      newError.username =
        "Username is required field.  Please fill this field.";
    }

    if (!SignUpUser.email) {
      newError.email = "Email is required field. please fill this field.";
    } else if (!/\S+@\S+\.\S+/.test(SignUpUser.email)) {
      newError.email = "Enter a valid email";
    }

    if (!SignUpUser.password) {
      newError.password = "Password is required field. please fill this field";
    } else if (SignUpUser.password.length < 6) {
      SignUpUser.password = "Password must be at least 8 characters";
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  };

  const SignUpBody = { ...SignUpUser };

  /**
   * @version 1.0.0
   * @description This function sending a POST request to backend and wait for response and then sign up users.
   * @examle Use it for form submit attribute. onSubmit((e)=>SubmitForm);
   */
  const SubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidate = validate();

    if (!isValidate) {
      return;
    }

    fetch("http://localhost:8000/Register", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(SignUpBody),
    })
      .then(async (res) => {
        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("RESPONSE:", data);

        if (!res.ok) {
          throw new Error("Some things went wrong.");
        }

        return data;
      })
      .then((data) => {
        console.log(data);
        console.log("New User was added.");
        history("/signin");
      })
      .catch((err: Error) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <section className="w-full  h-[100vh] bg-[#07070A] text-[#F5F5F5] flex justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-0">
        <section className="w-[60%] h-auto bg-[#111116] flex gap-[10px] justify-center items-center text-[#F5F5F5] border border-[#27272A] rounded duration-[0.8s] shadow-[0_8px_20px_rgba(59,130,246,0.30)]">
          <div className="w-[50%] h-full">
            <img
              src="https://images.openai.com/static-rsc-4/Ttt2thQGkjlpuH5gus5M7dB68UfYo0KcazxlklR-1K7_YIz3KgR6wGksz2S-s5F7yZdlfVob67uMseRBAF2E6cYsz7Bb1NEWLRl26nkDp_CMKvKlFevwwKfmMTOwhTD08OotbV4z2emOhPJvVZ0el9YJ-gcpJJeYBVQVz41pW9ASG5n-cj3HvhEabDJka7wE?purpose=fullsize"
              alt="Headphone Icone"
              className="w-[100%] h-[100%] object-cover"
            />
          </div>

          <form
            action=""
            className="w-[50%] h-full flex flex-col gap-4 sm:gap-5 md:gap-6 items-start p-4 sm:p-5 md:p-6 lg:p-8"
            onSubmit={(e) => SubmitForm(e)}
          >
            <div className="flex flex-col justify-start items-start  gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sign up</h2>
              <p className="text-xs sm:text-sm md:text-base">
                Please Sign up / Register
              </p>
            </div>
            <div className="w-full h-[1.5rem]">
              {error && (
                <p className="size-full bg-red-800">
                  {error.fullname ||
                    error.username ||
                    error.email ||
                    error.password}
                </p>
              )}
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[8px]">
              <label htmlFor="fullname" className="text-sm sm:text-lg ">
                FullName
              </label>
              <InputsForm
                name="fullname"
                type="text"
                value={SignUpUser?.fullname}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[8px]">
              <label htmlFor="Email" className="text-sm sm:text-lg ">
                UserName
              </label>
              <InputsForm
                name="username"
                type="text"
                value={SignUpUser?.username}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[8px]">
              <label htmlFor="Email" className="text-sm sm:text-lg ">
                Email
              </label>
              <InputsForm
                name="email"
                type="email"
                value={SignUpUser?.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-cetner items-start gap-[8px] mt-[20px]">
              <label htmlFor="Password" className="text-sm sm:text-lg">
                Password
              </label>
              <InputsForm
                name="passwrod"
                type="password"
                value={SignUpUser?.password}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div className="w-full h-[4rem] flex flex-col justify-between items-end gap-[10px] mt-[10px]">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#8B5CF6] cursor-pointer rounded hover:bg-[#A855F7] transition-colors duration-300"
              >
                Sign up
              </button>
              <p className="w-full flex justify-center ">
                If you have already account, please{" "}
                <Link
                  to="/signin"
                  className="text-[#A855F7] duration-[0.4s] bg-[#111116] hover:bg-[#A855F7] hover:text-[#07070A] px-[5px] rounded"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default Signup;
