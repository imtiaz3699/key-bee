import React, { useEffect } from "react";
import { MoveLeft } from "lucide-react";
import { Star } from "lucide-react";
import SwitchOne from "../../../components/Switch/SwitchOne";
import { Progress, Rate } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../utils/api";
import dayjs from "dayjs";
import DeleteModal from "../../../components/Modal/DeleteModal";
import toast from "react-hot-toast";
import { routes } from "../../../utils/routes";
import OperatorTaskTable from "../../../components/tables/OperatorTaskTable";
function ViewOperator() {
  const [isChecked, setIsChecked] = React.useState(false);
  const [operator, setOperator] = React.useState(null);
  const [isDelete, setIsDelete] = React.useState(false);
  const [tasks, setTasks] = React.useState();
  const [pagination, setPagination] = React.useState({
    limit: 10,
    page: 1,
    totalPages: 0,
    total: 0,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchOperator = async () => {
    try {
      const res = await api.get(
        `api/admin/viewSingleOperator/${id}?page=${pagination?.page}?limit=${pagination?.limit}`
      );
      if (res?.statusCode === 200) {
        setOperator(res?.data?.operator);
        setIsChecked(res?.data?.operator?.isAvailable);
        setTasks(res?.data?.tasks);
        if (pagination?.totalPages !== res?.data?.pagination?.totalPages) {
          setPagination((prev) => ({
            ...prev,
            totalPages: res?.data?.pagination?.totalPages,
          }));
        }
        console.log(res, "fasdlfjahsldfjahsldfjahsdlfkjdk");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteOperator = async () => {
    try {
      const res = await api.delete(`api/admin/deleteOperator/${id}`);
      if (res?.statusCode === 200) {
        setIsDelete(false);
        toast.success("Operator has been deleted successfully.");
        navigate(routes.MANAGE_OPERATORS);
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong. Please try again.");
    }
  };
  const handleEnableDisableOperator = async () => {
    const payload = {
      isAvailable: !isChecked,
    };
    try {
      const res = await api.patch(`api/admin/enableDisable/${id}`, payload);
      if (res?.statusCode === 200) {
        setIsChecked(res?.data?.isAvailable);
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(tasks, "fasldfjhasldkfjhalsdjfhsdkj");
  useEffect(() => {
    fetchOperator();
  }, [pagination?.page]);
  return (
    <div className="flex flex-col gap-[16px] ">
      <div className="flex flex-row items-center gap-2 font-bold text-[#151515] text-[14px]">
        <MoveLeft />
        Operator Information
      </div>
      <div className="w-full  flex items-center justify-between">
        <div className="flex items-center justify-between max-w-[1109px] w-full rounded-[10px] border-[1px] border-gray-300 py-[20px] pr-[20px]">
          <div className="w-[307px] flex flex-col items-center justify-center gap-[8px]">
            <div className="w-[100px] h-[100px] rounded-full bg-red-500"></div>
            <p className="font-bold text-[20px] leading-[24px]">
              {operator?.first_name + operator?.last_name}
            </p>
            <p className="text-[#6F767E] text-[15px]">{operator?.email}</p>
            <p className="text-[#6F767E] text-[15px] flex flex-row items-center gap-2">
              <Star color="#F8B84E" /> 4.9 (23 reviews)
            </p>
          </div>

          <div className="flex flex-col gap-[32px] ">
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#6F767E] text-[16px] leading-[100%]">
                First Name
              </p>
              <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                {operator?.first_name}
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#6F767E] text-[16px] leading-[100%]">
                Phone Number
              </p>
              <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                {operator?.phone_number}
              </p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="text-[#6F767E] text-[16px] leading-[100%]">
                Created Date Time
              </p>
              <p className="text-[#33383F] font-bold text-[16px] leading-[100%]">
                {dayjs(operator?.created_at).format("DD-MM-YYYY HH:mm A")}
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
                onChange={() => handleEnableDisableOperator()}
              />
            </div>
          </div>

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
              <p className="font-bold text-[18px] text-[#151515]">Documents</p>
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
      <OperatorTaskTable
        tasks={tasks}
        pagination={pagination}
        setPagination={setPagination}
      />
      <DeleteModal
        title="Delete!"
        content="Are you sure you want to delete this operator? This action cannot be undone."
        open={isDelete}
        onCancel={() => setIsDelete(false)}
        onOk={handleDeleteOperator}
      />
    </div>
  );
}

export default ViewOperator;
