import AnimationTxt from "../AnimationTxt";
import heroImage from "../../assets/Hero_headphone-removebg-preview.png";


const HeroSec = () => {
  return (
    <>
      <section className="w-full h-[80vh] bg-[#111116] flex justify-center items-center relative z-[10]">
        <div
          className="w-[50%] h-full flex flex-col justify-center items-start gap-[40px]"
          data-aos="fade-right"
        >
          <div className="w-[60%] h-[50%] text-[#F5F5F5] text-left text-6xl font-bold leading-normal drop-shadow-[0_0_40px_rgba(139,92,246,0.35)]">
            <h1 className="">PREMIUM SOUND. BUILT FOR YOUR WORLD.</h1>
          </div>
          <div className="w-[450px] h-[4rem] mt-6 text-lg text-[#A1A1AA]">
            <AnimationTxt message="   Amazing audio for musics, gaming and every things that you need." />
          </div>
          <button className="w-[200px] h-[3rem] mt-[40px] bg-[#8B5CF6] duration-[0.4s] text-zinc-950 hover:bg-[#A855F7] hover:text-zinc-100 rounded-[50px] cursor-pointer">
            Explore products
          </button>
        </div>
        <div data-aos="fade-left">
          <img
            src={heroImage}
            alt="Hero image"
            className="w-[500px] h-[500px] object-cover drop-shadow-[0_0_10px_rgba(139,92,246,0.35)]"
          />
        </div>
        <div
          className="
                absolute
                z-[-1]
                bottom-[40%]
                left-[12%]
                w-[500px]
                h-[300px]
                rounded-full
                bg-purple-600/15
                blur-[120px]
              "
        />
      </section>
    </>
  );
};

export default HeroSec;
