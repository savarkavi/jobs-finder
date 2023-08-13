import { Link, useLocation } from "react-router-dom";
import { navigationLinks } from "../utils/constants";

const Sidebar = () => {
  const location = useLocation();
  console.log(location);
  const renderedLinks = navigationLinks.map((link, i) => {
    const isActive = location.pathname === link.url;
    const linkStyle = isActive
      ? "flex gap-4 text-teal-500 px-4 items-center text-xl cursor-pointer transition-all"
      : "flex gap-4 text-white items-center text-xl cursor-pointer hover:text-teal-500 hover:px-4 transition-all";

    return (
      <Link to={link.url} key={i}>
        <div className={linkStyle}>
          <div>{link.icon}</div>
          <span>{link.name}</span>
        </div>
      </Link>
    );
  });

  return (
    <div className="hidden lg:block  bg-zinc-900 h-screen w-[250px] py-7 px-12 fixed top-0 shadow-xl">
      <div className="flex gap-4 items-center max-w-[1280px] mx-auto">
        <div className="bg-teal-500 p-5 rounded-xl w-10 h-10 text-center text-2xl flex justify-center items-center text-white font-bold">
          JF
        </div>
        <h1 className="text-2xl text-teal-500 font-bold tracking-wide">
          JobsFinder
        </h1>
      </div>
      <div className="mt-[120px] flex flex-col gap-12">{renderedLinks}</div>
    </div>
  );
};

export default Sidebar;
