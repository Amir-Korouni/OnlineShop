import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";

import Feataredproduct from "../Components/HomeSections/FeataredProduct";
import GamingProduct from "../Components/HomeSections/GamingProduct";
import TrendingNow from "../Components/HomeSections/TrendingNow";
import HeroSec from "../Components/HomeSections/HeroSec";
import Footer from "../Components/Footer";
import WhyUs from "../Components/HomeSections/WhyUs";

const Home = () => {
  const users = useContext(AuthContext);
  console.log("HOME:", users?.users);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <>
      <main className="w-full h-[300vh] bg-[#07070A]">
        {/* Hero section */}
        <HeroSec />

        {/* categories */}
        <WhyUs />

        {/* Featared Product */}
        <Feataredproduct />

        {/* Gaming Collection */}
        <GamingProduct />

        {/* Trending now */}
        <TrendingNow />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

export default Home;
