import { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";
import heroImage from "../assets/Hero_headphone-removebg-preview.png";

const Home = () => {
  const users = useContext(AuthContext);
  console.log("HOME:", users?.users);
  return (
    <>
      <section className="w-full h-[100vh] bg-[#07070A]">
        <div className="w-full h-[80vh] bg-[#111116] flex justify-center items-center relative">
          <div className="w-[50%] h-full flex flex-col justify-center items-start gap-[40px]">
            <div className=" w-auto text-[#F5F5F5] drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]">
              <h1>Your Sound</h1>
              <h1>Your World</h1>
            </div>
            <div className="w-[450px] h-[4rem] text-gray-800 ">
              <h2>Premium audio for music, gaming and everything between.</h2>
            </div>
            <button className="w-[200px] h-[3rem] mt-[40px] bg-[#8B5CF6] duration-[0.4s] text-zinc-950 hover:bg-[#A855F7] rounded-[50px] cursor-pointer">
              Explore more
            </button>
          </div>
          <div>
            <img
              src={heroImage}
              alt="Hero image"
              className="w-[500px] h-[500px] object-cover drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]"
            />
            <button></button>
          </div>
          <div
            className="
                absolute
                bottom-[20%]
                left-[12%]
                w-[500px]
                h-[400px]
                rounded-full
                bg-purple-600/20
                blur-[120px]
              "
          />
        </div>
      </section>
    </>
  );
};

export default Home;
