import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../utils/routes";

function ManageAdminUserView() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col max-w-[400px] w-full border-[1px] border-gray-200 p-[24px] rounded-[24px] gap-[24px]">
      <div className="flex items-center justify-end">
        <button onClick={()=> navigate(routes.MANAGE_ADMIN_USERS_EDIT)} className="bg-[#6F767E] w-[56px] h-[25px] text-gray-100 rounded-[4px] cursor-pointer">
          Edit
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-[12px]">
        <div className="w-[105px] h-[105px] rounded-full bg-gray-600"></div>
        <p className="font-bold text-[20px] leading-[24px] text-[#151515]">
          Chelsie Jhonson
        </p>
        <p className="font-normal text-[20px] text-[#6F767E]">
          chelsiejhonson@keybee.com
        </p>
      </div>
      <div className="flex flex-col gap-[12px] border-b-[1px] border-b-gray-200 pb-5">
        <div className="flex flex-col gap-[3px]">
          <p className="text-[#6F767E] text-[14px] font-normal">Phone number</p>
          <p className="text-[#33383F] text-[16px] font-medium">
            +88 01600-009770
          </p>
        </div>
        <div className="flex flex-col gap-[3px]">
          <p className="text-[#6F767E] text-[14px] font-normal">Phone number</p>
          <p className="text-[#33383F] text-[16px] font-medium">
            +88 01600-009770
          </p>
        </div>
      </div>
    </div>
  );
}

export default ManageAdminUserView;
