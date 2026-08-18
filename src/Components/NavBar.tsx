import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="w-full h-[5rem] bg-[#0A0A0F] p-[5px] rounded-lg">
        <nav className="size-full bg-[#1F1F27] flex justify-between align-center rounded-lg border-b border-[#A855F7] px-[10px]">
          <div className="flex justify-center items-center w-[150px]">
            <img src="" alt="Logo" />
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
          <div className="w-auto h-[4rem] flex justify-end items-center gap-[10px]">
            <div>Search</div>
            <Link to="/cart">Cart</Link>
            <div className="w-[100px] h-[50px] flex flex-row justify-center items-center gap-[10px]">
              {/* <h3 className="text-purple-600">Profile</h3>
              <div className="w-[50px] h-[50px] rounded-[50%] bg-[#8B5CF6]"></div> */}
              <Link to="/login">
                <button className="w-[100px] h-[50px] text-wite-700 border rounded-[10px] duration-500 cursor-pointer hover:bg-purple-500 hover:text-zinc-900">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
