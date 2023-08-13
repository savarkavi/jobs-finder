/* eslint-disable react/prop-types */
import { FaLocationArrow } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { PiBagFill } from "react-icons/pi";

import day from "dayjs";
import { Form, Link } from "react-router-dom";

const Job = ({ job }) => {
  console.log(job);
  return (
    <div className="bg-zinc-900 rounded-lg max-w-[700px] mx-auto">
      <div className="flex gap-8 items-center border-b p-4 lg:p-6">
        <div className="bg-teal-500 w-12 h-12 text-center flex justify-center items-center rounded-lg">
          {job.company[0].toUpperCase()}
        </div>
        <div className="flex flex-col text-sm">
          <span>{job.position}</span>
          <span>{job.company}</span>
        </div>
      </div>
      <div className="p-4 lg:p-6 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:gap-44 sm:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <FaLocationArrow />
            <span>{job.location}</span>
          </div>
          <div className="flex gap-4 items-center">
            <PiBagFill />
            <span>{job.jobType}</span>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <BsCalendarDateFill />
            <span>{day(job.createdAt).format("MMM DD, YYYY")}</span>
          </div>
          <div>
            <span className="bg-yellow-100 text-orange-500 px-3 py-1 rounded-lg">
              {job.jobStatus}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 p-4">
        <Link
          to={`/dashboard/edit-job/${job._id}`}
          className="bg-teal-500 text-white px-3 py-1 rounded-lg"
        >
          Edit
        </Link>
        <Form method="post" action={`/dashboard/delete-job/${job._id}`}>
          <button className="bg-teal-500 text-white px-3 py-1 rounded-lg">
            Delete
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Job;
