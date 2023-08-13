import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen bg-black p-6 flex justify-center items-center">
      <div className="flex flex-col items-center text-center gap-6">
        <img
          src={errorImg}
          alt="error image"
          className="w-full max-w-[768px]"
        />
        <p className="text-2xl text-gray-500 md:text-3xl">
          Oops! Page not found.
        </p>
        <p className="text-white text-sm md:text-lg">
          We cant seem to find the page you arre looking for.
        </p>
        <Link to="/" className="text-teal-500">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
