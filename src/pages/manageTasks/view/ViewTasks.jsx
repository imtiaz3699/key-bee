import { Rate, Table } from "antd";
import { LocateIcon, MapPin, MoveLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function ViewTasks() {
  const navigate = useNavigate();
  const taskTypes = [
    "in_progress",
    "Delivered",
    "Cancelled",
    "Open Task",
    "Completed",
  ];
  const taskHeading = ["Task In-Progress"];
  const currentTask = "in_progress";
  const data = [
    {
      key: "1",
      title: "The admin has refunded the amount",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the Lorem Ipsum is simply....",
      date: "06/12/2025 - 05:06PM",
      amount: "$20",
    },
  ];
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action Description",
      dataIndex: "action_description",
      key: "action_description",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Amount",
      dataIndex: "date",
      key: "date",
    },
  ];
  return (
    <div className="flex flex-col gap-[17px] ">
      <div className="flex flex-col sm:flex-row justify-between gap-5">
        <div className="text-[#000000] flex flex-row items-center gap-4">
          <MoveLeft
            color="#000000"
            onClick={() => navigate(-1)}
            className="cursor-pointer"
          />
          <p className="text-[14px] font-bold leading-[20px]">
            Task In-Progress
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-[#4C4C4C] font-medium text-[18px]">Status:</p>
          <div className="flex flex-row items-center ">
            {" "}
            <div className="w-[20px] h-[20px] rounded-full bg-blue-700"></div>{" "}
            <p className="font-bold text-[18px]">In Progress</p>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  items-stretch gap-[40px] ">
        <div className="w-full lg:w-1/2 border-[1px] border-gray-100 px-[20px] py-[28px] rounded-[8px] flex flex-col gap-[15px] justify-between">
          <div className="flex flex-col gap-[20px] ">
            <div className="w-full flex flex-row items-center justify-between border-b-[1px] border-b-gray-100 pb-[20px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[43px] h-[43px] rounded-full ">
                  <img src="/Avatar.png" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[#151515] text-[16px]">
                    Chelsie Jhonson
                  </p>
                  <div className="flex flex-row  gap-2 ">
                    <p className="text-[#151515] text-[14.4px] font-bold">
                      4.9
                    </p>
                    <Rate defaultValue={2.5} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-[#303030] text-[14px] font-normal">
                <p>+233 20 234 5678</p>
                <p>acbcd@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between">
              <div className="text-[24px] font-bold leading-[33.66px]">
                Photo Walkthrough
                <p className="text-[#1B323C99] text-[15px] font-normal">
                  Posted 12 mins ago{" "}
                </p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <MapPin />
                <p className="font-bold text-[16px] text-[#595959]">
                  123 Main St, Austin, TX
                </p>
              </div>
            </div>
            <div className="text-[16px]">
              Budget: <span className="text-green-500 font-bold"> 200$</span>
            </div>
            <div className="flex flex-row items-center">
              <span className="text-[18px] font-normal">Due Date:</span>
              <span className="text-[#3B8EB2] font-bold text-[18px]">
                | Aug 22, 2025 – 3:00 PM
              </span>
            </div>
            <p className="text-[20px] font-normal leading-[26.93px] text-gray-500">
              Please provide a complete photo walkthrough of the property.
              Capture wide-angle shots of every room, making sure each space is
              clearly visible... <span className="text-blue-700">see more</span>
            </p>
          </div>

          <div className="flex flex-row items-end justify-end">
            <button
              disabled
              className="w-[170px] h-[40px]  rounded-[8px] text-[14px] font-medium text-white bg-[#F03000] disabled:bg-[#c94a2b] disabled:cursor-not-allowed"
            >
              Refund To Creator
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 px-[20px] pt-[0px] pb-[28px] flex flex-col justify-between h-auto">
          <div>
            <p className="font-bold text-[16px] text-[#151515] mb-[8px] ">
              Operator:
            </p>
            <div className="w-full flex flex-row items-center justify-between pb-[20px]">
              <div className="flex flex-row items-center gap-[10px]">
                <div className="w-[43px] h-[43px] rounded-full ">
                  <img src="/Avatar.png" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-[#151515] text-[16px]">
                    Chelsie Jhonson
                  </p>
                  <div className="flex flex-row  gap-2 ">
                    <p className="text-[#151515] text-[14.4px] font-bold">
                      4.9
                    </p>
                    <Rate defaultValue={2.5} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col  text-[#303030] text-[14px] font-normal">
                <p>+233 20 234 5678</p>
                <p>acbcd@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-[14px] text-[#151515]">Media Files</p>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#151515CF] ">
                Images: <span className="font-normal"> (10)</span>
              </p>
              <div className="flex flex-row items-center gap-1 w-full ">
                <Swiper
                  slidesPerView={4}
                  breakpoints={{
                    640: { slidesPerView: 4, spaceBetween: 10 }, // >= 640px → 2 items
                    1024: { slidesPerView: 3, spaceBetween: -100 }, // >= 1024px → 3 items
                    1280: { slidesPerView: 5, spaceBetween: -150 }, // >= 1280px → 4 items
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-bold text-[#151515CF] ">
                Videos: <span className="font-normal"> (10)</span>
              </p>
              <div className="flex flex-row items-center gap-1 w-full ">
                <Swiper
                  slidesPerView={4}
                  breakpoints={{
                    640: { slidesPerView: 4, spaceBetween: 10 }, // >= 640px → 2 items
                    1024: { slidesPerView: 3, spaceBetween: -100 }, // >= 1024px → 3 items
                    1280: { slidesPerView: 5, spaceBetween: -150 }, // >= 1280px → 4 items
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="w-[109px] h-[98px] rounded-[3px] shadow-sm border-[1px] border-gray-300"></div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[10px] mt-5">
            <p className="font-bold text-[15px] text-[#151515CF]">
              Description
            </p>
            <p className="px-[13px] py-[8px] rounded-[7px] border-[#979797] border-[1px] bg-[#EBEBEB] text-[#1B323C99]">
              Please provide a complete photo walkthrough of the property.
              Capture wide-angle shots of every room, making sure each space is
              clearly visible.
            </p>
          </div>
          <div className="flex items-center justify-end mt-5">
            <button className="w-[170px] h-[40px]  rounded-[8px] text-[14px] font-medium text-[#000000] bg-[#FFC750] disabled:bg-[#dba93b] disabled:cursor-not-allowed">
              Release Payment
            </button>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] border-gray-200 mt-10 pt-[20px]">
        <p className="font-bold text-[16px] text-[#151515]">
          Admin Action Logs:
        </p>
        <div style={{ overflowX: "auto" }} className="overflow-x-auto">
          {/* <div className = ""> */}
          <Table
            columns={columns.map((col) => ({ ...col, width: 150 }))}
            dataSource={data}
            rowClassName={(_, index) =>
              index % 2 === 0 ? "bg-gray-50" : "bg-white"
            }
            pagination={false}
            bordered={false}
            className="custom-table"
            scroll={{ x: "max-content" }}
            style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)" }}
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ViewTasks;
