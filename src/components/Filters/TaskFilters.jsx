import { Button, Popover } from "antd";
import { ChevronUp, X } from "lucide-react";
import React, { useState } from "react";

function TaskFilters() {
  const [filters, setFilters] = useState(["Approved", "Not Approved"]);
  const taskTypes = [
    {
      name: "Active",
      value: "active",
    },
    {
      name: "Delivered",
      value: "delivered",
    },
    {
      name: "In Progress",
      value: "inprogress",
    },
    {
      name: "Completed",
      value: "completed",
    },
    {
      name: "Cancelled",
      value: "cancelled",
    },
  ];
   
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
    <div className="w-full flex flex-col sm:flex-row items-start   gap-3 justify-between">
      <div className="flex flex-wrap flex-row bg-[#FBFBFB] py-[10px] px-[10px] rounded-[8px]  gap-3">
        {taskTypes?.map((element, idx) => {
          return (
            <p
              key={element?.name}
              className="border-[1px] border-[#DDDFDE] bg-white py-[8px] px-[12px] rounded-[6px] text-[#000000] text-[#73767B] font-medium text-[14px] flex flex-row items-center gap-1"
            >
              {element?.name}
            </p>
          );
        })}
      </div>

      <div className="flex flex-row items-center gap-3">
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
  );
}

export default TaskFilters;
