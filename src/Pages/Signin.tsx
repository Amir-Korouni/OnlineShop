import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { data, Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import type { UserLogin } from "../Types/User";
import { AuthContext } from "../Context/Context";

const Signin = () => {
  const [User, setUser] = useState({} as UserLogin);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const users = useContext(AuthContext);

  const history = useNavigate();

  const UsersData = { ...User };
  const SubmitForm = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:8000/Login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(UsersData),
    })
      .then(async (res) => {
        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("SERVER RESPONSE:", data);

        if (!res.ok) {
          throw new Error(data.message || "any exist problem.");
        }

        return data;
      })
      .then((fetchedData) => {
        users.setUser(fetchedData);
        history("/");
      })
      .catch((err) => {
        console.log(err.message);
      })
    };
    console.log(users.users?.email , users.users?.password);
  return (
    <>
      <section className="w-full h-[100vh] bg-[#07070A] text-[#F5F5F5] flex justify-center items-center">
        <section className="w-[55%] h-[70%] bg-[#111116] flex gap-[10px] justify-center items-center text-[#F5F5F5] border border-[#27272A] rounded duration-[0.8s] shadow-[0_8px_20px_rgba(59,130,246,0.30)]">
          <form
            action=""
            className="w-[50%] h-[90%] flex flex-col gap-[35px] items-start p-[8px] px-[15px]"
            onSubmit={(e) => SubmitForm(e)}
          >
            <div className="flex flex-col justify-start items-start">
              <h1>Sign in</h1>
              <p>Welcome back to head phone shop.</p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-[8px]">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                value={User.email}
                onChange={(e) => handleChange(e)}
                className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#27272A] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
              />
            </div>
            <div className="w-full flex flex-col justify-cetner items-start gap-[8px] mt-[20px]">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                value={User.password}
                onChange={(e) => handleChange(e)}
                className="w-full h-[2rem] bg-[#0D0D12] text-[#F5F5F5] border border-[#27272A] rounded focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] p-[5px]"
              />
            </div>
            <div className="w-full h-[4rem]">
              <h3>sign in with another way:</h3>
              <div className="w-full flex justify-around items-center mt-[5px]">
                <button className="w-[50px] h-[2rem] bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]">
                  <FcGoogle
                    to="/signingoogle"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </button>
                <button className="w-[50px] h-[2rem] bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]">
                  <FaFacebook
                    to="/signinfacebook"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </button>
                <button className="w-[50px] h-[2rem] bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]">
                  <FaGithub
                    to="/signingithub"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </button>
                <button className="w-[50px] h-[2rem] bg-[#27272A] flex justify-cetner items-center cursor-pointer rounded duration-[0.4s] hover:shadow-[0_5px_30px_rgba(59,130,246,0.30)]">
                  <FaThreads
                    to="/signinthreads"
                    size={24}
                    className="size-full flex justify-center p-[3px]"
                  />
                </button>
              </div>
            </div>
            <div className="w-full h-full flex justify-between items-end mt-[10px]">
              <p className="w-[250px]">
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
