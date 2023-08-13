import { Form, useNavigation, useOutletContext } from "react-router-dom";

const Profile = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useOutletContext();

  return (
    <div className=" text-white mt-[80px] w-full p-6">
      <Form
        method="post"
        encType="multipart/form-data"
        className="bg-zinc-900 flex flex-col gap-4 lg:gap-20 p-6 w-full h-full rounded-lg max-w-[1200px] mx-auto"
      >
        <h2 className="text-white text-2xl lg:text-center">Edit the Profile</h2>
        <div className="flex flex-wrap gap-4 max-w-[900px] mx-auto">
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="avatar">Select an image(max 0.5mb)</label>
            <input
              name="avatar"
              type="file"
              accept="image/*"
              className="outline-none px-2 py-2 bg-black border  text-sm "
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm "
              defaultValue={user.name}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="lastName">Last Name</label>
            <input
              name="lastName"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm "
              defaultValue={user.lastName}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              className="outline-none px-2 py-2 bg-black border  text-sm "
              defaultValue={user.email}
            />
          </div>
          <div className="flex flex-col gap-2 w-full lg:w-[250px]">
            <label htmlFor="location">Location</label>
            <input
              name="location"
              type="text"
              className="outline-none px-2 py-2 bg-black border  text-sm "
              defaultValue={user.location}
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

export default Profile;
