import { MoveLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import InputOne from "../../../components/Inputs/InputOne";
import CustomBtn from "../../../components/Buttons/CustomBtn";

function ManageAdminUsersForm() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-row items-center gap-2 font-bold text-[#151515] text-[14px]">
        <MoveLeft className="cursor-pointer" onClick={() => navigate(-1)} />
        Manage Admin Users
      </div>
      <div className="mt-[16px]">
        <div className="w-[96px] h-[96px] rounded-full bg-gray-700"></div>
        <div className="max-w-[700px] w-full flex flex-col gap-[24px] mt-[16px]">
          <InputOne label="Name" placeholder={"John Doe."} />
          <div className="flex flex-col sm:flex-row  items-center gap-[16px]">
            <InputOne label="Email" placeholder={"johndoe@gmail.com"} />
            <InputOne label="Phone number" placeholder={"John Doe."} />
          </div>
          <InputOne label="Role" placeholder={"Enter role."} />
          <div>
            <CustomBtn btnText={"Add User"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAdminUsersForm;
