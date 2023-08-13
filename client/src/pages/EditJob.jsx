import { Form, useNavigation, useLoaderData } from "react-router-dom";

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="p-6">
      <Form
        method="post"
        className="bg-zinc-900 flex flex-col gap-4  lg:gap-20 p-6 w-full h-full rounded-lg max-w-[1200px] mx-auto"
      >
        <h2 className="text-white text-2xl lg:text-center">Edit the job</h2>
        <div className="flex flex-wrap gap-4 max-w-[900px] mx-auto">
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="position" className="text-white text-sm">
              Position
            </label>
            <input
              name="position"
              type="text"
              required
              className="outline-none px-2 py-2 bg-black text-white text-sm border"
              defaultValue={job.position}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="company" className="text-white text-sm">
              Company
            </label>
            <input
              name="company"
              type="text"
              required
              className="outline-none px-2 py-2 bg-black text-white text-sm border"
              defaultValue={job.company}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="location" className="text-white text-sm">
              Job Location
            </label>
            <input
              name="location"
              type="text"
              required
              className="outline-none px-2 py-2 bg-black text-white text-sm border"
              defaultValue={job.location}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="jobStatus" className="text-white text-sm">
              Job Status
            </label>
            <input
              name="jobStatus"
              type="text"
              required
              className="outline-none px-2 py-2 bg-black text-white text-sm border"
              defaultValue={job.jobStatus}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="jobType" className="text-white text-sm">
              Job Type
            </label>
            <input
              name="jobType"
              type="text"
              required
              className="outline-none px-2 py-2 bg-black text-white text-sm border"
              defaultValue={job.jobType}
            />
          </div>
        </div>
        <button
          className="bg-teal-500 text-white px-4 py-2 mt-4 rounded-lg w-full max-w-[400px] mx-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "submit"}
        </button>
      </Form>
    </div>
  );
};

export default EditJob;
