import { UserRound } from "lucide-react";
import React, { useState } from "react";
import EditProfile from "./Update/Edit";

function ManageProfile() {
  const [isEdit, setIsEdit] = useState(true);
  const userData = [{}];
  return (
    <div className="flex flex-col gap-[16px] ">
      <h1 className="font-bold text-[14px] text-[#151515]">Manage Operators</h1>
      <div className="w-full bg-gradient-to-b from-[#FFC750] from-50% to-[#FBFBFB] to-50% h-[300px] rounded-[28px] border-[#FFC750] border-[1px] flex flex-col gap-[24px] items-start justify-center px-[32px]">
        <div className="w-[140px] h-[140px] rounded-full bg-white  flex items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full  bg-black "></div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between w-full ">
          <div className="flex flex-col">
            <p className="text-[#151515] font-medium text-[20px]">
              Chelsie Johnson
            </p>
            <p className="text-gray-400 font-medium text-[20px]">
              Your account is ready.
            </p>
          </div>
          <button onClick={()=> setIsEdit(!isEdit)} className=" cursor-pointer w-[158px] h-[52px] bg-[#FFC750] text-[#151515] rounded-[10px] font-medium">
            {isEdit ? "Save changes" : "Edit Profile"}
          </button>
        </div>
      </div>

      {isEdit ? (
        <EditProfile/>
      ) : (
        <div className="rounded-[28px] border-[#FFC750] border-[1px] bg-[#FBFBFB] p-[30px] flex flex-col gap-[24px]">
          <div className="flex flex-row items-center gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#faedd1] flex items-center justify-center">
              <img src="/userIcon.png" />
            </div>
            <p className="text-[16px] font-normal">Chelsie</p>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#faedd1] flex items-center justify-center">
              <img src="/userIcon.png" />
            </div>
            <p className="text-[16px] font-normal">Chelsie</p>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#faedd1] flex items-center justify-center">
              <img src="/sms.png" />
            </div>
            <p className="text-[16px] font-normal">
              chelsi.johnson@example.com
            </p>
          </div>
          <div className="flex flex-row items-center gap-[20px]">
            <div className="w-[40px] h-[40px] rounded-full bg-[#faedd1] flex items-center justify-center">
              <img src="/call.png" />
            </div>
            <p className="text-[16px] font-normal">+12 3456 7890</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageProfile;
