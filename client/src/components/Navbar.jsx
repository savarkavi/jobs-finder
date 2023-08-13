import { useContext, useState } from "react";
import { AiOutlineMenu, AiFillCaretDown } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { DashboardContext } from "../pages/DashboardLayout";

const Navbar = () => {
  const { data, isDarkMode, toggleDarkMode, logout } =
    useContext(DashboardContext);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  console.log(data);

  const toggleLogOut = () => {
    setIsLogoutOpen((prev) => !prev);
  };

  return (
    <div className="p-6 bg-zinc-900 sticky top-0 w-full h-[100px] flex justify-center items-center shadow-xl">
      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-6">
          <AiOutlineMenu className="text-teal-500 text-2xl cursor-pointer lg:hidden" />
          <div className="flex gap-4 items-center max-w-[1280px] mx-auto lg:hidden">
            <div className="bg-teal-500 p-4 rounded-lg w-2 h-2 text-center text-md flex justify-center items-center text-white font-bold">
              JF
            </div>
            <h1 className="text-lg text-teal-500 font-bold tracking-wide">
              <span className="hidden md:block">JobsFinder</span>
            </h1>
          </div>
        </div>
        <span className="hidden lg:block text-white text-4xl uppercase tracking-wider">
          Dashboard
        </span>
        <div className="flex gap-4 items-center">
          <div className="text-lg">
            {isDarkMode ? (
              <BsFillSunFill
                className="text-white cursor-pointer"
                onClick={toggleDarkMode}
              />
            ) : (
              <BsFillMoonFill
                className="text-black cursor-pointer"
                onClick={toggleDarkMode}
              />
            )}
          </div>
          <div className="relative">
            <div
              className="flex text-white items-center gap-2 bg-teal-500 px-2 py-2 rounded-lg cursor-pointer"
              onClick={toggleLogOut}
            >
              {data.user.avatar ? (
                <img
                  src={data.user.avatar}
                  alt="avatar"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <CgProfile />
              )}
              <span>{data.user.name}</span>
              <AiFillCaretDown />
            </div>
            {isLogoutOpen && (
              <div
                className="absolute bg-teal-500 px-2 py-2 rounded-lg cursor-pointer text-white top-14 w-full text-center"
                onClick={logout}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
