import { Progress, Rate } from "antd";
import { MapPin, MoveLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function CreatorTaskView() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="text-[#000000] flex flex-row items-center gap-4 ">
        <MoveLeft
          color="#000000"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <p className="text-[14px] font-bold leading-[20px]">Task Completed</p>
      </div>
      <div className="flex flex-row items-center justify-between  mt-5 border-b-[1px] border-b-gray-200 pb-5">
        <div className="flex flex-row items-center gap-[24px]">
          <div className="bg-[#F3B4111A] h-[120px] w-[120px] flex items-center justify-center rounded-[10px] font-bold text-[54px] text-[#151515]">
            4.9
          </div>
          <div className="flex flex-col items-start">
            <Rate defaultValue={5} />
            <p className="font-medium text-[16px] text-[#151515]">
              From 2K Reviews
            </p>
          </div>
        </div>
        <div>
          {Array.from({ length: 5 }).map((_, idx) => (
            <div className="flex flex-row items-center gap-[30px]">
              <div className="whitespace-nowrap">
                <Rate defaultValue={5} className="" />
              </div>
              <Progress
                percent={50}
                showInfo={false}
                percentPosition={{ align: "center", type: "outer" }}
                className="!my-2"
                rootClassName="!w-[150px]  !h-[14.09px]  [&_.ant-progress-bg]:!h-[14.09px] [&_.ant-progress-bg]:!rounded-none [&_.ant-progress-inner]:!rounded-none "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="border-[1px] border-gray-200 mt-[16px] p-[20px] rounded-[8px] flex flex-row items-start">
        <div className="w-1/2 border-[1px] border-gray-200 rounded-[8px] p-[20px]">
          <div className="flex flex-row items-start justify-between">
            <div>
              <p className="text-[24px] font-bold leading-[33.66px]">
                Photo Walkthrough
              </p>
              <p className = 'font-normal text-[15.15px] text-[#1B323C99]'>Posted 12 Min ago</p>
            </div>

            <div className="flex flex-row items-center gap-1">
              <MapPin />
              <p className="font-bold text-[16px] text-[#595959]">
                {"task?.location_Of_Property?.address"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-[20px]"></div>
      </div>
    </div>
  );
}

export default CreatorTaskView;
