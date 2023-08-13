import { Link } from "react-router-dom";
import landingImg from "../assets/images/main.svg";

const Landing = () => {
  return (
    <div className="px-6 py-8 bg-black h-screen">
      <div className="flex gap-4 items-center max-w-[1280px] mx-auto">
        <div className="bg-teal-500 p-5 rounded-xl w-14 h-14 text-center text-4xl flex justify-center items-center text-white font-bold">
          JF
        </div>
        <h1 className="text-3xl text-teal-500 font-bold tracking-wide">
          JobsFinder
        </h1>
      </div>
      <div className="mt-[150px] flex items-center justify-between  max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-12">
          <h2 className="text-white text-4xl md:text-6xl xl:text-7xl ">
            Job <span className="text-teal-500">Tracking</span> App{" "}
          </h2>
          <p className="text-white max-w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            pariatur ratione repudiandae rerum atque minus cupiditate, aut totam
            odit magni! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Ullam sed facilis dolorum, harum, ipsa commodi consequatur
            voluptatem inventore quis suscipit rerum in, qui similique error
            enim saepe sapiente! Commodi, consectetur.
          </p>
          <div className="flex gap-4">
            <Link to="login">
              <button className="bg-teal-500 px-4 py-2 text-white rounded-lg">
                Login
              </button>
            </Link>
            <Link to="register">
              <button className="bg-teal-500 px-4 py-2 text-white rounded-lg">
                Register
              </button>
            </Link>
          </div>
        </div>
        <img
          src={landingImg}
          alt="landing img"
          className="w-[50%] hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Landing;
