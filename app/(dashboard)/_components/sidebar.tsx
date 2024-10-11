import React from "react";
import Logo from "./logo.svg";
import Image from "next/image";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex items-center justify-start gap-2">
        <Image height={50} width={50} alt="logo" src="/logo.svg" />
        <h1 className="text-xl font-extrabold mt-1">My LMS</h1>
      </div>
      <div className="">
        <SidebarRoutes />
      </div>
    </div>
  );
};
