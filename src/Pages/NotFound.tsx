import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="size-full h-[100vh] flex flex-col justify-center items-center gap-[25px] bg-gradient-to-br from-black via-purple-950 to-black">
        <div className="w-[70%] h-[80%] flex justify-center items-center bg-black/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-[10px] px-[15px] flex flex-col gap-[20px] relative">
          <div className="w-[70%] h-full flex flex-col justify-center items-center gap-[25px]">
            <h1 className="text-[150px] font-black text-purple-500 drop-shadow-[0_0_25px_#a855f7]">
              404
            </h1>
            <div className="bg-black/20 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-[10px] px-[15px] flex flex-col gap-[20px] relative">
              <h2>Page Not Found</h2>
              <p className="text-white drop-shadow-[0_0_55px_#a855f7]">
                Sorry, we couldn't find that page.
              </p>
              <p className="text-white drop-shadow-[0_0_55px_#a855f7]">
                You may have mistyped the address or the page may have been
                moved. You can
                <span className="w-[50px] text-blue-500 rounded duration-700 hover:bg-purple-500 hover:text-white shadow-purple-500/50">
                  <Link to="/signin"> Sign In </Link>
                </span>
                here
              </p>
              <div className="absolute top-[10%] left-[2%] animate-pulse w-[20px] h-[20px] rounded-[50%] bg-blue-300 drop-shadow-[0_0_25px_#000] "></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
