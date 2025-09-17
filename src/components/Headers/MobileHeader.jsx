import React from "react";
import { Link } from "react-router-dom";
import { UserPen, UserCog, UserRound, FileCheck, Bell } from "lucide-react";
import { Menu, X } from "lucide-react";
function MobileHeader({sidebarOpen,setSidebarOpen}) {
  return (
    <header className="text-white p-4 flex justify-between items-center md:hidden bg-white border-b-[1px] border-b-gray-200">
      <Link
        to="/"
        className="text-[16px] font-medium text-[#151515] flex flex-row items-center gap-3"
      >
        <img src="/logo.png" alt="logo" />
        KEYBEE
      </Link>
      <div className="flex flex-row items-center gap-5">
        <Bell color="#6F767E" />
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? (
            <X size={24} color="#151515" />
          ) : (
            <Menu size={24} color="#151515" />
          )}
        </button>
      </div>
    </header>
  );
}

export default MobileHeader;
