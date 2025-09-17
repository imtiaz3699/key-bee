import React from "react";
import AntSelect from "../../components/AntSelect/AntSelect";
import { TrendingUp } from 'lucide-react';
function Dashboard() {
  const tabs = [
    {
      name: "Total Creators",
      number: "7,265",
      percent: "+11.01%",
      bgColor: "#FEBB0F",
    },
    {
      name: "Total Operators",
      number: "3,671",
      percent: "-0.03%",
      bgColor: "#E6F1FD",
    },
    {
      name: "Total Tasks",
      number: "156",
      percent: "+15%",
      bgColor: "#FEBB0F",
    },
    {
      name: "Total Admin Earnings",
      number: "2,318",
      percent: "+6.08%",
      bgColor: "#E6F1FD",
    },
  ];
  return (
    <div className="w-full flex flex-col  gap-[16px]">
      <div className="w-full flex flex-col sm:flex-row justify-between gap-3">
        <p className="font-bold text-[14px]">Overview</p>
        <AntSelect />
      </div>

      <div className="flex flex-row items-center justify-between gap-[26px]">
        {tabs?.map((element, idx) => {
          return (
            <div
              key={idx}
              className={`flex flex-col rounded-[16px] text-[#151515] `}
              style={{
                backgroundColor: element.bgColor,
                padding: "24px",
                flex: 1,
              }}
            >
              <span className="font-normal text-[14px] leading-[20px]">
                {element.name}
              </span>
              <div className="flex flex-row items-center justify-between">
                <span className="text-[40px] font-bold">{element.number}</span>
                <div className="text-xs text-gray-500 flex flex-row items-center gap-2">
                  <span>{element.percent}</span>
                   <TrendingUp color = 'black' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
