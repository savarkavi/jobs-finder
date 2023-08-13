import { useLoaderData } from "react-router-dom";
import Job from "../components/Job";

const AllJobs = () => {
  const data = useLoaderData();
  const { jobs } = data;
  if (jobs.length === 0) {
    return (
      <h2 className="text-white flex justify-center items-center mt-[200px] text-5xl">
        You&apos;ve added no jobs :(
      </h2>
    );
  }
  return (
    <div className=" text-white  w-full  p-6 -z-[99]">
      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap justify-center">
        {jobs.map((job, i) => {
          return (
            <div key={i}>
              <Job job={job} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllJobs;
