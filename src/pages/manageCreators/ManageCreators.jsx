import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { Popover, Button } from "antd";
import { X } from "lucide-react";
import ManageCreatorTables from "../../components/tables/ManageCreatorTables";

function ManageCreators() {
  const [filters, setFilters] = useState(["Approved", "Not Approved"]);

  const content = (
    <div className=" max-w-[472px] w-full md:w-[472px] p-4">
      <div className="flex items-center justify-between w-full mb-3">
        <h3 className="font-bold text-[16px] text-[#454958] ">Filter By</h3>
        <ChevronUp />
      </div>
      {/* Date Range */}
      <div className="flex items-center gap-2 mb-3">
        <input type="date" className="w-full  rounded px-2 py-1 bg-[#FFC750]" />
        <span className="font-medium">To</span>
        <input type="date" className="w-full  rounded px-2 py-1 bg-[#FFC750]" />
      </div>

      {/* Status */}
      <div className="flex items-center gap-3 mb-3">
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Approved
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Not Approved
        </label>
      </div>

      {/* Search */}
      <div className="flex flex-col gap-2 mb-2">
        <label className="text-[#454958] font-medium text-[16px]">
          Agent Name
        </label>
        <div className="flex flex-row items-center gap-2 ">
          <input
            type="text"
            placeholder="Search by name"
            className="flex-1  rounded px-2 h-[40px] border-[1px] border-gray-300 "
          />
          <Button
            type="primary"
            className="!bg-[#FFC750] !text-black !h-[40px]"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Extra fields */}
      <div className="flex flex-col gap-2 mt-5">
        <p className="text-[#454958] font-medium text-[16px]">Agent Email</p>
        <p className="text-[#454958] font-medium text-[16px]">
          Agent Phone Number
        </p>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col gap-[16px] w-full overflow-auto">
      <h1 className="font-bold text-[14px] text-[#151515]">Manage Creators</h1>
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-end">
        <div className="flex flex-wrap flex-row  gap-3">
          {filters?.map((element, idx) => {
            return (
              <p
                key={element}
                className="border-[1px] border-[#D9D9D9] py-[8px] px-[12px] rounded-[6px] text-[#000000] font-medium text-[14px] flex flex-row items-center gap-1"
              >
                {element}{" "}
                <X className="font-bold w-[16px] h-[16px] cursor-pointer" />{" "}
              </p>
            );
          })}
        </div>

        <div className="flex flex-row items-center gap-3">
          <p className="text-red-500 font-medium cursor-pointer">Reset</p>
          <Popover
            content={content}
            trigger="click"
            placement="bottomRight"
            overlayClassName="rounded-xl shadow-lg"
          >
            <div className="border-[1px] border-[#EAEAEA] text-nowrap py-[8px] px-[12px] rounded-[6px] text-[#ADA7A7] cursor-pointer font-medium text-[14px] flex flex-row items-center gap-1">
              <img src="/setting-4.png" /> Filter By
            </div>
          </Popover>
        </div>
      </div>

      <div>
        <ManageCreatorTables />
      </div>
    </div>
  );
}

export default ManageCreators;
