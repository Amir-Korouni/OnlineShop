import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";
import { FaCartPlus, FaSearch } from "react-icons/fa";

const NavBar = () => {
  const usersCon = useContext(AuthContext);
  return (
    <>
      <section className="w-full h-[5rem] bg-[#0A0A0F] p-[5px] rounded-lg">
        <nav className="size-full bg-[#1F1F27] flex justify-between align-center rounded-lg border-b border-[#A855F7] px-[10px]">
          <div className="flex justify-center items-center w-[150px]">
            <img
              src="https://images.openai.com/static-rsc-4/wNPXVNAU9v2wOHpER_gEANKPirezSehdScdB0ZDqCdIQ5G2ccwrCbmjfLcD0x3DLhhwLJjlAaMY1IEjl_imz4iieDuZMfkkt1LSExKzWBBCp8eGmdaa1APb-46kjGSS0NRCA4tsNu9rC2tq3HmhX1NXxsB_ElFtKbY9TDhlGMtAlmShKvdfR0nZPwWLdQzqo?purpose=fullsize"
              alt="Logo"
              className="w-full h-[2rem] object-contain"
            />
          </div>
          <ul className="w-[50%] h-[4rem] flex justify-between items-center ">
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/productdetail">something</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/orders">something</Link>
            </li>
          </ul>
          <div className="w-auto h-[4rem] flex justify-end items-center gap-[15px]">
            <button className="cursor-pointer">
              <FaSearch size={24} />
            </button>
            {usersCon?.users && (
              <div className="flex gap-5">
                <Link to="/cart">
                  <FaCartPlus size={25} />
                </Link>
              </div>
            )}
            <div className="w-[100px] h-[50px] flex flex-row justify-center items-center gap-[10px]">
              {usersCon?.users ? (
                // usersCon.users?.email
                <div className="w-[50px] h-[50px] rounded-full bg-purple-500">
                  <h2>{usersCon.users?.email}</h2>
                </div>
              ) : (
                <Link to="/signin">
                  <button className="w-[100px] h-[50px] text-wite-700 border rounded-[10px] duration-500 cursor-pointer hover:bg-purple-500 hover:text-zinc-900">
                    Sign in
                  </button>
                </Link>
              )}
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
