import { Link, useNavigate } from "react-router-dom";
import InputsForm from "../../Components/Forms/InputsForm";
import { useContext, useState } from "react";
import type { UserLogin } from "../../Types/User";
import type { SignInError } from "../Signin";
import { AuthContext } from "../../Context/ContextProvider";
import { BiCheckCircle, BiCheckShield } from "react-icons/bi";

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
      <section className="w-full h-[100vh] bg-[#07070A] text-[#F5F5F5] flex justify-center items-center gap-5 sm:gap-6 md:gap-8 lg:gap-0">
        <section className="w-[45%] h-full bg-[linear-gradient(45deg,#07070A,#302055)] flex flex-col justify-center items-center border-r">
          <h2 className="w-auto h-[6rem] flex justify-center drop-shadow-[0_5px_5px_#8B5CF6]">
            <BiCheckCircle size={35}/>
            Security Shop Admin Panel
          </h2>
          <h2 className="w-full h-[3rem] drop-shadow-[0_5px_5px_#8B5CF6]">
            Welcome to your admin panel
          </h2>
          <h2 className="w-full h-[3rem] drop-shadow-[0_5px_5px_#8B5CF6]">
            Dear admin, you can sign in and manage your shop.
          </h2>
        </section>

        <section className="w-[55%] h-full flex flex-col justify-center items-center">
          <form
            action="/admin/dashboard"
            className="w-[70%] h-auto bg-[#111116] p-10 flex flex-col  gap-7 rounded"
          >
            <div className="flex flex-col justify-start items-start  gap-1 sm:gap-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl">Sign in</h2>
              <p className="text-xs sm:text-sm md:text-base">
                Welcome dear admin
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
                Management Email
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
                Management Password
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
                className="w-full h-[40px] bg-[#8B5CF6] cursor-pointer rounded hover:bg-[#A855F7] transition-colors duration-300"
              >
                Sign in
              </button>
            </div>
            <Link to="/adminresetpass">
              <h4 className="text-blue-700">
                If you forget password you can reset it here.
              </h4>
            </Link>
          </form>
        </section>
      </section>
    </>
  );
};

export default AdminLogin;
