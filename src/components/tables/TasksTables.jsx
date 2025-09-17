import { Table, Pagination, Dropdown, Menu, Switch, Tooltip } from "antd";
import React from "react";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import { CircleCheck, CircleX, Eye, Trash2 } from "lucide-react";
import { ExclamationOutlined } from "@ant-design/icons";
import { Star } from "lucide-react";
function TasksTables({ url, tasks }) {
  const data = tasks?.map((element, idx) => ({
    key: element?._id,
    task_title: element?.title,
    task_description: element?.desc,
    task_id: element?.task_uniqueId,
    task_price: element?.price,
    task_status: element?.task_Status,
    rating: 0,
  }));

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const menu = (
    <Menu style={{ width: "170px" }} className="!text-[#6F767E]">
      <Menu.Item key="1">
        {" "}
        <Link
          to={url ? url : routes.VIEW_TASK}
          path={url ? url : routes.VIEW_TASK}
          className="flex items-center gap-2"
        >
          <Eye className="h-[16px] w-[16px]" color="#6F767E" />{" "}
          <span className="!text-[#6F767E]"> View Details</span>
        </Link>{" "}
      </Menu.Item>
      <Menu.Item key="5">
        <div className="flex items-center gap-2">
          <Trash2 className="h-[16px] w-[16px]" color="#6F767E" />
          <span className="!text-[#6F767E]">Delete</span>{" "}
        </div>{" "}
      </Menu.Item>
    </Menu>
  );
  const selectStatusColor = (status) => {
    switch (status) {
      case "cancelled":
        return "bg-red-500";
        break;
      case "delivered":
        return "bg-yellow-600";
        break;
      case "inprogress":
        return "bg-blue-700";
        break;
      case "completed":
        return "bg-green-600";
        break;
      case "active":
        return "bg-green-600";
        break;
      default:
        return "bg-gray-500";
        break;
    }
  };
  const columns = [
    {
      title: "Task Title",
      dataIndex: "task_title",
      key: "task_title",
    },
    {
      title: "Task Description",
      dataIndex: "task_description",
      key: "task_description",
    },
    {
      title: <div className="text-center">Task ID</div>,
      dataIndex: "task_id",
      key: "task_id",
      render: (text) => <div className=" font-bold text-center">{text}</div>,
    },
    {
      title: <div className="text-center">Task Price</div>,
      dataIndex: "task_price",
      key: "task_price",
      render: (text) => (
        <div className=" font-bold text-center text-green-500">{text}</div>
      ),
    },
    {
      title: <div className="text-center">Task Status</div>,
      dataIndex: "task_status",
      key: "task_status",

      render: (_, record) => {
        const statusType = selectStatusColor(record?.task_status);
        record?.task_status === "cancelled" ? "bg-red-500" : "";
        return (
          <div className=" text-center flex items-center  gap-[10px] justify-center font-medium text-[#343A40] ">
            <div className="flex items-center justify-center w-[10px] h-[10px] rounded-full bg-[#DEE2E6]">
              <div
                className={`w-[10px] h-[10px] ${statusType} rounded-full`}
              ></div>
            </div>
            {record?.task_status}
            {record?.task_status === "cancelled" && (
              <Tooltip title="prompt text">
                <div className="">
                  <img src="/exclamation.png" className="w-[19px] h-[19px]" />
                </div>
              </Tooltip>
            )}
          </div>
        );
      },
    },
    {
      title: <div className="text-center text-[#343A40]">Ratings</div>,
      dataIndex: "ratings",
      key: "ratings",

      render: (text) => (
        <div className=" flex items-center justify-center gap-[10px]">
          {" "}
          <Star color="#595959" fill="#595959" />
          No Ratings
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Dropdown overlay={menu} trigger={["click"]}>
          <EllipsisOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Dropdown>
      ),
    },
  ];
  return (
    <div style={{ overflowX: "auto" }} className="overflow-x-auto">
      <Table
        columns={columns.map((col) => ({ ...col, width: 150 }))}
        dataSource={data}
        pagination={{
          pageSize: 10,
          position: ["bottomLeft"],
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
        }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        }
        bordered={false}
        className="custom-table"
        scroll={{ x: "max-content" }}
        style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)" }}
      />
    </div>
  );
}

export default TasksTables;
