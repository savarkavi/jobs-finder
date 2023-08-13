import { Form, useNavigation } from "react-router-dom";

const AddJob = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className=" text-white mt-[80px] w-full p-6">
      <Form
        method="post"
        className="bg-zinc-900 flex flex-col gap-4 lg:gap-20 p-6 w-full h-full rounded-lg max-w-[1200px] mx-auto"
      >
        <h2 className="text-white text-2xl lg:text-center">Add a job</h2>
        <div className="flex flex-wrap gap-4 max-w-[900px] mx-auto">
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="position">Position</label>
            <input
              name="position"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="company">Company</label>
            <input
              name="company"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="location">Job Location</label>
            <input
              name="location"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm"
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="jobStatus">Job Status</label>
            <select
              name="jobStatus"
              type="text"
              className="outline-none px-2 py-2 bg-black border text-sm"
              defaultValue={"pending"}
            >
              <option>{"pending"}</option>
              <option>{"interview"}</option>
              <option>{"done"}</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="jobType">Job Type</label>
            <select
              name="jobType"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm"
              defaultValue={"full-time"}
            >
              <option>{"full-time"}</option>
              <option>{"part-time"}</option>
              <option>{"internship"}</option>
            </select>
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

export default AddJob;
