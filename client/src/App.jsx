import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./pages/DashboardLayout";
import AddJob from "./pages/AddJob";
import AllJobs from "./pages/AllJobs";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import EditJob from "./pages/EditJob";
import DeleteJob from "./pages/DeleteJob";

import Error from "./pages/Error";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "login",
          element: <Login />,
          action: async ({ request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries(formData);
            try {
              await axios.post("/api/auth/login", data);
              toast.success("Login successful");
              return redirect("/dashboard");
            } catch (error) {
              toast.error(error?.response?.data);
              return error;
            }
          },
        },
        {
          path: "register",
          element: <Register />,
          action: async ({ request }) => {
            const formData = await request.formData();
            const data = Object.fromEntries(formData);
            try {
              await axios.post("/api/auth/register", data);
              toast.success("Registration successful");
              return redirect("/login");
            } catch (error) {
              toast.error(error?.response?.data);
              return error;
            }
          },
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          loader: async () => {
            try {
              const { data } = await axios.get("/api/users/current-user");
              console.log(data);
              return data;
            } catch (error) {
              return redirect("/");
            }
          },
          children: [
            {
              index: true,
              element: <AddJob />,
              action: async ({ request }) => {
                const formData = await request.formData();
                const data = Object.fromEntries(formData);
                try {
                  await axios.post("/api/jobs", data);
                  toast.success("Job added successfully");
                  return redirect("/dashboard/all-jobs");
                } catch (error) {
                  toast.error(error?.response?.data);
                  return error;
                }
              },
            },
            {
              path: "all-jobs",
              element: <AllJobs />,
              loader: async () => {
                try {
                  const { data } = await axios.get("/api/jobs");
                  return data;
                } catch (error) {
                  return error;
                }
              },
            },
            {
              path: "stats",
              element: <Stats />,
              loader: async () => {
                try {
                  const { data } = await axios("/api/jobs/stats");
                  return data;
                } catch (error) {
                  return error;
                }
              },
            },
            {
              path: "profile",
              element: <Profile />,
              action: async ({ request }) => {
                const formData = await request.formData();
                const file = formData.get("avatar");
                if (file && file.size > 500000) {
                  toast.error("Image size is too big");
                  return null;
                }
                try {
                  await axios.patch("/api/users/update-user", formData);
                  toast.success("Profile updated successfully");
                } catch (error) {
                  if (Array.isArray(error?.response?.data?.error)) {
                    error.response.data.error.forEach((errorMessage) => {
                      toast.error(errorMessage);
                    });
                  } else {
                    toast.error(error?.response?.data?.error);
                  }
                }
                return null;
              },
            },
            {
              path: "edit-job/:id",
              element: <EditJob />,
              loader: async ({ params }) => {
                try {
                  const { data } = await axios.get(`/api/jobs/${params.id}`);
                  console.log(data);
                  return data;
                } catch (error) {
                  if (Array.isArray(error?.response?.data?.error)) {
                    error.response.data.error.forEach((errorMessage) => {
                      toast.error(errorMessage);
                    });
                  } else {
                    toast.error(error?.response?.data?.error);
                  }
                  return redirect("/dashboard/all-jobs");
                }
              },
              action: async ({ request, params }) => {
                const formData = await request.formData();
                const data = Object.fromEntries(formData);
                try {
                  await axios.patch(`/api/jobs/${params.id}`, data);
                  toast.success("Job updated successfully");
                  return redirect("/dashboard/all-jobs");
                } catch (error) {
                  toast.error(error?.response?.data);
                  return error;
                }
              },
            },
            {
              path: "delete-job/:id",
              element: <DeleteJob />,
              action: async ({ params }) => {
                try {
                  await axios.delete(`/api/jobs/${params.id}`);
                  toast.success("Job deleted successfully");
                } catch (error) {
                  toast.error(error?.response?.data);
                }
                return redirect("/dashboard/all-jobs");
              },
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
