import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/ContextProvider";
import AOS from "aos";
import "aos/dist/aos.css";

import Feataredproduct from "../Components/HomeSections/FeataredProduct";
import Categories from "../Components/HomeSections/Categories";
import GamingProduct from "../Components/HomeSections/GamingProduct";
import TrendingNow from "../Components/HomeSections/TrendingNow";
import HeroSec from "../Components/HomeSections/HeroSec";
import Footer from "../Components/Footer";

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
        <Categories />

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
