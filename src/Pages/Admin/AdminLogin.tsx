import { Link, useNavigate } from "react-router-dom";
import InputsForm from "../../Components/Forms/InputsForm";
import { useContext, useState } from "react";
import type { UserLogin } from "../../Types/User";
import type { SignInError } from "../Signin";
import { AuthContext } from "../../Context/ContextProvider";

const AdminLogin = () => {
  const [user, setUser] = useState<UserLogin>({ email: "", password: "" });
  const [error, setError] = useState<SignInError | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const usersContext = useContext(AuthContext);

  const history = useNavigate();

  const adminData = { ...user };

  const validate = () => {
    const newError: SignInError = {};
    if (!adminData.email) {
      newError.email = "Fullname is required field. Please fill this field.";
    }

    if (!adminData.password) {
      newError.password = "Password is required field. please fill this field";
    } else if (adminData.password.length < 6) {
      adminData.password = "Password must be at least 6 characters";
    }
    setError(newError);

    return Object.keys(newError).length === 0;
  };

  return (
    <>
      <section className="w-full h-[120vh] bg-[#001b24] text-[#F5F5F5] flex justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-0">
        <section className="w-[50%] h-[80%] flex gap-[10px] flex-col justify-center items-center text-[#F5F5F5] ">
          <div className="">
            <h2>Welcome</h2>
            <h2>Sign in admin</h2>
          </div>
          <form
            action="/admin/dashboard"
            className="w-[80%] h-auto bg-[#11111696] p-10 flex flex-col gap-7 "
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
              <InputsForm
                name="email"
                type="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-cetner items-start gap-[8px] mt-[5px]">
              <label htmlFor="Password" className="text-sm sm:text-lg">
                Password
              </label>
              <InputsForm
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="w-full h-[4rem] flex justify-between items-end mt-[10px]">
              <button
                type="submit"
                className="w-full h-[50px] bg-[#8B5CF6] cursor-pointer rounded hover:bg-[#A855F7] transition-colors duration-300"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex gap-2">
            <Link to="/adminresetpass">
              <h2>Forrget password</h2>
            </Link>
            <div>
              <h3>No credentioal yet? Use Demo mode</h3>
              <button>Preview as Management Demo</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default AdminLogin;
