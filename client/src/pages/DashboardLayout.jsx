import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const DashboardContext = createContext();

const DashboardLayout = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const [showNavigation, setShowNavigation] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleNavigation = () => {
    setShowNavigation((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const logout = async () => {
    navigate("/");
    await axios.get("/api/auth/logout");
    toast.success("You are Logged out");
  };

  return (
    <DashboardContext.Provider
      value={{
        data,
        showNavigation,
        isDarkMode,
        toggleNavigation,
        toggleDarkMode,
        logout,
      }}
    >
      <div className=" bg-black min-h-screen relative">
        {showNavigation && <Navigation />}
        <div className="h-full flex">
          <Sidebar />
          <div className="sticky top-0 w-full lg:w-[calc(100vw-250px)] lg:translate-x-[250px] flex flex-col">
            <Navbar />
            <Outlet context={data} />{" "}
            {/* you can also provide context like this(only with react-router) without context provider */}
          </div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
};

export { DashboardContext };
export default DashboardLayout;
