import { Progress, Rate } from "antd";
import { MoveLeft, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import SwitchOne from "../../../components/Switch/SwitchOne";
import TasksTables from "../../../components/tables/TasksTables";
import CustomBtn from "../../../components/Buttons/CustomBtn";
import { routes } from "../../../utils/routes";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../utils/api";
import dayjs from "dayjs";
import DeleteModal from "../../../components/Modal/DeleteModal";
import toast from "react-hot-toast";
import CreatorTaskTable from "../../../components/tables/CreatorTaskTable";

function ManageCreatorsView() {
  const { id } = useParams();
  const [isChecked, setIsChecked] = React.useState(false);
  const [creator, setCreator] = React.useState(null);
  const [isDelete, setIsDelete] = React.useState(false);
  const [tasks, setTasks] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    totalPages: 0,
    total: 0,
  });
  const navigate = useNavigate();
  const fetchCreator = async () => {
    try {
      const res = await api.get(
        `api/admin/viewSingleCreator/${id}?page=${pagination?.page}&limit=${pagination?.limit}`
      );
      if (res) {
        setCreator(res?.data?.creator);
        setIsChecked(res?.data?.creator?.isAvailable);
        setTasks(res?.data?.tasks);
        if (pagination?.totalPages !== res?.data?.pagination?.totalPages) {
          setPagination((prev) => ({
            ...prev,
            totalPages: res?.data?.pagination?.totalPages,
          }));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCreator();
  }, [pagination?.page,pagination?.limit]);
  const handleDeleteCreator = async () => {
    try {
      const res = await api.delete(`api/admin/deletecreator/${id}`);
      if (res) {
        toast.success("Creator has been deleted successfully.");
        navigate(routes.MANAGE_CREATORS);
        setIsDelete(false);
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const handleEnableDisableCreator = async () => {
    const payload = {
      isAvailable: !isChecked,
    };
    try {
      const res = await api.patch(
        `api/admin/enableDisablecreator/${id}`,
        payload
      );
      if (res) {
        setIsChecked(res?.data?.creator?.isAvailable);
        fetchCreator();
        toast.success("Creator status has been updated successfully.");
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(tasks, "f1a3sd21f3as5d7fa8sd34f5");
  return (
    <div className="flex flex-col gap-[17px]">
      <div className="text-[#000000] flex flex-row items-center gap-4">
        <MoveLeft
          color="#000000"
          onClick={() => navigate(-1)}
          className="cursor-pointer"
        />
        <p className="text-[14px] font-bold leading-[20px]">
          Creators Information
        </p>
      </div>

      <div className="w-full  flex items-center justify-between  ">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0  max-w-[1109px]  w-full rounded-[10px] border-[1px] border-gray-300 py-[20px] pr-[20px] pl-[20px]">
          <div className="flex flex-col sm:flex-row items-start sm:items-start lg:items-center justify-center sm:justify-evenly lg:justify-between w-full lg:w-1/2 gap-10 sm:gap-0">
            <div className="lg:w-[307px] flex flex-row items-start sm:flex-col sm:items-center justify-center gap-[8px]">
              <div className="w-[100px] h-[100px] rounded-full bg-red-500"></div>
              <div className="flex flex-col items-center gap-[8px]">
                <p className="font-bold text-[20px] leading-[24px]">
                  {creator?.first_name + creator?.last_name}
                </p>
                <p className="text-[#6F767E] text-[15px]">{creator?.email}</p>
                <p className="text-[#6F767E] text-[15px] flex flex-row items-center gap-2">
                  <Star color="#F8B84E" /> 4.9 (23 reviews)
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-wrap sm:flex-nowrap sm:flex-col gap-[32px] ">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[#6F767E] text-[16px] leading-[100%]">
                  First Name
                </p>
                <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                  {creator?.first_name}
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="text-[#6F767E] text-[16px] leading-[100%]">
                  Phone Number
                </p>
                <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                  {creator?.phone_number}
                </p>
              </div>
              <div className="flex flex-col gap-[6px]">
                <p className="text-[#6F767E] text-[16px] leading-[100%]">
                  Created Date Time
                </p>
                <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                  {dayjs(creator?.created_at).format("DD-MM-YYYY HH:mm A")}
                </p>
              </div>
              <div className="flex flex-row items-center  gap-[14px]">
                <button
                  onClick={() => setIsDelete(true)}
                  className="cursor-pointer w-[73px] h-[27px] bg-[#F03000] text-[14px] leading-[19px] text-white rounded-[100px]"
                >
                  Delete
                </button>
                <SwitchOne
                  checked={isChecked}
                  onChange={() => handleEnableDisableCreator()}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start lg:items-center  justify-evenly w-full lg:w-1/2">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[16.11px]">
                <p className="font-bold text-[24px] ">
                  4.9/ <span className="text-[16px] font-normal"> 5.0</span>
                </p>
                <Rate allowHalf defaultValue={2.5} />
                <p>05 Ratings</p>
              </div>
            </div>

            <div className="flex flex-col gap-[18.95px]">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div className="flex flex-row items-center gap-[30px]">
                  <div className="whitespace-nowrap">
                    <Rate defaultValue={5} className="" />
                  </div>
                  <Progress
                    percent={50}
                    showInfo={false}
                    percentPosition={{ align: "center", type: "outer" }}
                    className=""
                    rootClassName="!w-[150px] !h-[14.09px] [&_.ant-progress-bg]:!h-[14.09px] [&_.ant-progress-bg]:!rounded-none [&_.ant-progress-inner]:!rounded-none"
                  />
                </div>
              ))}
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-[18px] text-[#151515]">
                  Documents
                </p>
                <div className="flex flex-row items-center gap-[12px]">
                  <div className="w-[56px] h-[56px] bg-[#2F80ED26] rounded-[11px]"></div>
                  <div className="flex flex-col gap-1">
                    <p className="font-bold text-[18px] leading-[100%]">
                      License
                    </p>
                    <p className="">Businesslicense.pdf</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-3 w-full bg-[#FBFBFB] py-[10px] px-[10px]">
        <CustomBtn btnText="Completed Tasks" isActive={true} />
        <CustomBtn btnText="Completed Tasks" />
      </div>
      <CreatorTaskTable
        tasks={tasks}
        pagination={pagination}
        setPagination={setPagination}
      />
      <DeleteModal
        title="Delete!"
        content="Are you sure you want to delete this creator? This action cannot be undone."
        open={isDelete}
        onCancel={() => setIsDelete(false)}
        onOk={handleDeleteCreator}
      />
    </div>
  );
}

export default ManageCreatorsView;
