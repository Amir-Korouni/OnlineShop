import { FaBolt, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const WhyUs = () => {
  return (
    <>
      <section
        className="w-[70%] m-auto h-[50vh] flex flex-col justify-center items-start gap-10 mt-15 px-10"
        data-aos="fade-up"
      >
        <h2>Why you prefer us?</h2>
        <div className="w-full h-[80%] flex justify-between items-center">
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaBolt size={120} color="#8B5CF6" className="animate-pulse" />
            <div>
              <h3 className="text-2xl text-zinc-100">Fast Delivery</h3>
              <h3>Quick & reliable delivery</h3>
            </div>
          </div>
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaShieldAlt size={120} color="#8B5CF6" className="animate-pulse" />
            <div>
              <h3 className="text-2xl text-zinc-100">Warranty</h3>
              <h3>Shop with confidence</h3>
            </div>
          </div>
          <div className="w-[250px] h-[300px] border border-[#8B5CF6] rounded flex flex-col justify-center items-center gap-20 bg-[#1F1F27] drop-shadow-[0_0_10px_rgba(139,92,246,0.35)] cursor-pointer duration-800 hover:scale-105">
            <FaCheckCircle
              size={120}
              color="#8B5CF6"
              className="animate-pulse"
            />
            <div>
              <h3 className="text-2xl text-zinc-100">Authentic</h3>
              <h3>100% Original products</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
