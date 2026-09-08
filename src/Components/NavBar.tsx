import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../Reduxs/store";
const NavBar = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  console.log(user);

  // const dispatch = useDispatch();
  const search = useRef<HTMLInputElement>(null);

  const searchFocus = () => {
    search.current?.focus();
  };
  return (
    <>
      <header className="w-full h-[5rem] bg-[#0A0A0F] p-[5px] rounded-lg">
        <nav className="size-full bg-[#1F1F27] flex justify-between align-center rounded-lg border-b border-[#A855F7] px-[10px]">
          <div className="flex justify-center items-center w-[150px]">
            <img
              src="https://images.openai.com/static-rsc-4/wNPXVNAU9v2wOHpER_gEANKPirezSehdScdB0ZDqCdIQ5G2ccwrCbmjfLcD0x3DLhhwLJjlAaMY1IEjl_imz4iieDuZMfkkt1LSExKzWBBCp8eGmdaa1APb-46kjGSS0NRCA4tsNu9rC2tq3HmhX1NXxsB_ElFtKbY9TDhlGMtAlmShKvdfR0nZPwWLdQzqo?purpose=fullsize"
              alt="Logo"
              className="w-full h-[2rem] object-contain"
            />
          </div>
          <ul className="w-[40%] h-[4rem] flex justify-between items-center">
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/products">Products</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/aboutus"> About us</Link>
            </li>
            <li className="text-center hover:text-[#A855F7] duration-200">
              <Link to="/contact">Contact us</Link>
            </li>
          </ul>
          <div className="w-auto h-[4rem] flex justify-end items-center gap-[15px]">
            <input
              type="search"
              ref={search}
              placeholder="search..."
              className="w-[80%] h-[2rem] text-[#F5F5F5] border border-[#343438] focus:border-zinc-100 rounded p-[5px]"
            />
            <button className="cursor-pointer" onClick={searchFocus}>
              <FaSearch size={24} />
            </button>
            {user && (
              <div className="flex gap-5">
                <Link to="/cart">
                  <FaCartPlus size={25} />
                </Link>
              </div>
            )}
            <div className="w-[100px] h-[50px] flex flex-row justify-center items-center gap-[10px]">
              {user ? (
                <div className="w-[50px] h-[50px] rounded-full bg-purple-500">
                  <h2>{user.username}</h2>
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
      </header>
    </>
  );
};

export default NavBar;
