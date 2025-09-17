import React from "react";
import InputOne from "../../../components/Inputs/InputOne";

function EditProfile() {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium text-[20px]">Edit Profile</p>
      <p className="text-[#151515] text-[16px] ">Personal</p>
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[24px] sm:flex-row items-center sm:gap-[12px] w-full">
          <InputOne
            label="First Name"
            placeholder={"Enter your first name..."}
          />
          <InputOne label="Last Name" placeholder={"Enter your last name..."} />
        </div>
        <div className="flex flex-row items-center gap-[12px] w-full">
          <InputOne label="Email address" placeholder={"Email address..."} />
        </div>
        <div className="flex flex-row items-center gap-[12px] w-full">
          <InputOne
            label="Change password"
            placeholder={"Change password..."}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
