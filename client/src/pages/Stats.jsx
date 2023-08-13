import { useLoaderData } from "react-router-dom";
import { MdPendingActions } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { AiFillCheckSquare } from "react-icons/ai";

const Stats = () => {
  const { defaultStats } = useLoaderData();
  console.log(defaultStats);

  return (
    <div className="p-6 flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-10">
      <div className="bg-zinc-900 rounded-lg px-4 py-10 flex justify-between border-b-2 border-yellow-500 max-w-[800px] w-full">
        <div className="flex flex-col gap-6">
          <span className="text-5xl text-yellow-500">
            {defaultStats.pending}
          </span>
          <h3 className="text-white text-2xl">Pending Applications</h3>
        </div>
        <div className="bg-yellow-100 p-4 w-14 h-14 rounded-lg flex justify-center items-center">
          <div>
            <MdPendingActions className="text-3xl text-yellow-500" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg px-4 py-10  flex justify-between border-b-2 border-blue-500 max-w-[800px] w-full">
        <div className="flex flex-col gap-6">
          <span className="text-5xl text-blue-500">
            {defaultStats.interview}
          </span>
          <h3 className="text-white text-2xl">Interviews Scheduled</h3>
        </div>
        <div className="bg-blue-100 p-4 w-14 h-14 rounded-lg flex justify-center items-center">
          <div>
            <BsFillCalendarDateFill className="text-3xl text-blue-500" />
          </div>
        </div>
      </div>
      <div className="bg-zinc-900 rounded-lg px-4 py-10  flex justify-between border-b-2 border-green-500 max-w-[800px] w-full">
        <div className="flex flex-col gap-6">
          <span className="text-5xl text-green-500">{defaultStats.done}</span>
          <h3 className="text-white text-2xl">Jobs Done</h3>
        </div>
        <div className="bg-green-100 p-4 w-14 h-14 rounded-lg flex justify-center items-center">
          <div>
            <AiFillCheckSquare className="text-3xl text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
