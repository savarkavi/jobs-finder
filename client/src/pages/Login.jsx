import { Link, Form, useNavigation } from "react-router-dom";

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="h-screen bg-black flex justify-center items-center p-6">
      <div className="flex flex-col gap-6 items-center bg-zinc-900 p-8 rounded-xl w-full max-w-[400px] h-[500px]">
        <div className="flex gap-4 items-center max-w-[1280px] mx-auto">
          <div className="bg-teal-500 p-5 rounded-xl w-14 h-14 text-center text-4xl flex justify-center items-center text-white font-bold">
            JF
          </div>
          <h1 className="text-3xl text-teal-500 font-bold tracking-wide">
            JobsFinder
          </h1>
        </div>
        <span className="text-white text-2xl">Login</span>
        <Form method="post" className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-white text-sm">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="outline-none px-2 py-1 bg-zinc-500 border"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-white text-sm">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              className="outline-none px-2 py-1 bg-zinc-500 border"
            />
          </div>
          <button
            className="bg-teal-500 text-white px-4 py-1 mt-4 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "submit"}
          </button>
        </Form>
        <p className="text-white">
          Not a member yet?
          <Link to="/register">
            <span className="text-teal-500"> Submit</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
