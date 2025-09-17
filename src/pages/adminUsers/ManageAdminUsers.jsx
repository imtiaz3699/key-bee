import React from "react";
import CustomBtn from "../../components/Buttons/CustomBtn";
import { Plus } from "lucide-react";
import ManageAdminUsersTable from "../../components/tables/ManageAdminUsersTable";
import { useNavigate } from "react-router-dom";
import { routes } from "../../utils/routes";

function ManageAdminUsers() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-bold text-[14px] text-[#151515]">
        Manage Admin Users
      </h1>
      <div className="mt-[28px] flex items-center justify-between">
        <CustomBtn onClick={()=> navigate(routes.MANAGE_ADMIN_USERS_ADD)} startIcon={<Plus />} btnText={"Add new users"} />
        <input
          className="w-[320px] h-[40px] border-[1px] border-gray-300 outline-none rounded-[8px] px-3"
          placeholder="Search..."
        />
      </div>
      <div className = 'mt-[16px]'>
        <ManageAdminUsersTable/>
      </div>
    </div>
  );
}

export default ManageAdminUsers;
