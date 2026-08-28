import { FaHeadphones } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";

const Categories = () => {
  return (
    <>
      <section
        className="w-[70%] m-auto h-[50vh] flex flex-col justify-center items-start gap-10 mt-15 px-10"
        data-aos="fade-up"
      >
        <h2>Our Shop Category: </h2>
        <div className="w-full h-[80%] flex justify-between items-center">
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaHeadphones size={120} color="#8B5CF6" />
            <h2>Headphone</h2>
          </div>
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaEarListen size={120} color="#8B5CF6" />
            <h2>Airpuds</h2>
          </div>
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaHeadset size={120} color="#8B5CF6" />
            <h2>Handsfree / Headset</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
