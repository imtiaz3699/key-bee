import React from "react";
import { UserPen, UserCog, UserRound, FileCheck, Bell } from "lucide-react";
function DeskTopHeader({pageName}) {
  return (
    <header className="hidden md:flex justify-between items-center bg-white shadow px-6 py-6 border-b-[1px] border-b-gray-200 border-l-[1px] border-l-gray-200">
      <div className="text-[14px] text-[#151515] font-semibold flex flex-row items-center gap-2">
        <p className="text-gray-400 ">Dashboard {" "} / </p>
        <p className = ''>{pageName}</p>

      </div>
      <div className="flex items-center gap-4">
        <Bell color="#6F767E" />
        <div className="w-8 h-8 rounded-full bg-red-500">
          <img src="/Avatar.png" />
        </div>
      </div>
    </header>
  );
}

export default DeskTopHeader;
