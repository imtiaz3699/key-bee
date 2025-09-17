import React, { Children, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { UserPen, UserCog, UserRound, FileCheck, Bell } from "lucide-react";
import MobileHeader from "../components/Headers/MobileHeader";
import DeskTopHeader from "../components/Headers/DeskTopHeader";
import { routes } from "../utils/routes";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pageName, setPageName] = useState("Dashboard Overview");
  const location = useLocation();
  const pathName = location?.pathname;
  const sidebarUrls = [
    {
      name: "Overview",
      url: "/dashboard",
      icon: "/Icon@2x.png",
    },
    {
      name: "Manage Tasks",
      url: "/dashboard/manage-tasks",
      icon: <FileCheck />,
      children: [routes.VIEW_TASK],
    },
    {
      name: "Manage Operators",
      url: "/dashboard/manage-operators",
      icon: <UserPen />,
      children: [routes.VIEW_OPERATOR],
    },
    {
      name: "Manage Creators",
      url: "/dashboard/manage-creators",
      icon: <UserPen />,
      children: [
        routes.MANAGE_CREATORS_VIEW,
        routes.MANAGE_CREATORS_TASK_VIEW,
        routes.MANAGE_CREATORS_VIEW,
      ],
    },
    {
      name: "Manage Admin Users",
      url: "/dashboard/manage-admin-users",
      icon: <UserCog />,
      children: [
        routes.MANAGE_ADMIN_USERS_EDIT,
        routes.MANAGE_ADMIN_USERS_ADD,
        routes.MANAGE_ADMIN_USERS_VIEW,
      ],
    },

    {
      name: "Manage Profile",
      url: "/dashboard/manage-profile",
      icon: <UserRound />,
    },
  ];
  const handleRedirect = (url, name) => {
    setPageName(name);
  };
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header (mobile only) */}
      <MobileHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-row items-start ">
        {/* Sidebar */}
        <aside
          className={` fixed md:static top-0 left-0 h-screen w-64 shrink-0 flex flex-col p-6 transition-transform duration-300 z-50 overflow-y-auto 
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }`}
        >
          <Link
            to="/"
            className="text-[16px] font-medium text-[#151515] mb-[32px] flex flex-row items-center gap-3"
          >
            <img src="/logo.png" alt="logo" />
            KEYBEE
          </Link>

          <nav className="flex flex-col gap-4 ">
            <p className="text-[14px] text-[#727272]">Dashboard</p>
            {sidebarUrls?.map((element, idx) => (
              <Link
                key={idx}
                to={element?.url}
                className={`${
                  pathName === element?.url ||
                  element?.children?.some((child) => pathName.startsWith(child))
                    ? "bg-[#FFC750]"
                    : ""
                } hover:bg-[#FFC750] flex flex-row items-center p-[8px] gap-2 rounded-[8px] text-[14px] font-medium text-[#151515]`}
                onClick={() => {
                  setSidebarOpen(false);
                  handleRedirect(element?.url, element?.name);
                }}
              >
                {typeof element?.icon === "string" ? (
                  <img
                    src={element?.icon}
                    alt={element?.name}
                    className="w-4 h-4"
                  />
                ) : (
                  element?.icon
                )}
                {element?.name}
              </Link>
            ))}
          </nav>
        </aside>

        <div className="flex w-full flex-col h-screen">
          <DeskTopHeader pageName={pageName} />
          <main className="w-full p-6 h-full border-l-[1px] border-l-gray-200">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
