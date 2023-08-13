import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineQueryStats } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { RiProfileLine } from "react-icons/ri";

export const navigationLinks = [
  { name: "Add Job", icon: <TbReportAnalytics />, url: "/dashboard" },
  {
    name: "All Jobs",
    icon: <MdOutlineQueryStats />,
    url: "/dashboard/all-jobs",
  },
  { name: "Stats", icon: <IoMdStats />, url: "/dashboard/stats" },
  { name: "Profile", icon: <RiProfileLine />, url: "/dashboard/profile" },
];
