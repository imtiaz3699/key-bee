import React from "react";
import { Table, Pagination, Dropdown, Menu, Switch, Popconfirm } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Eye } from "lucide-react";
import { CircleCheck, Trash2 } from "lucide-react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import dayjs from "dayjs";
import toast from "react-hot-toast";
import api from "../../utils/api";
function ManageCreatorTables({ data, pagination, setPagination, refetch }) {
  const datas = data?.map((element, idx) => ({
    key: element?._id,
    name: element?.first_name + element?.last_name,
    email: element?.email,
    phone: element?.phone_number,
    datetime: element?.created_at,
    license: element?.subscriptions ?? [],
    isAvailable: element?.isAvailable,
  }));
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const handleEnableDisable = async (id, isAvailable, record) => {
    const payload = {
      isAvailable: isAvailable ? false : true,
    };
    try {
      const res = await api.patch(
        `api/admin/enableDisablecreator/${id}`,
        payload
      );
      if (res) {
        refetch();
        toast.success("Operator availability updated.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteCreator = async (id) => {
    try {
      const res = await api.delete(`api/admin/deletecreator/${id}`);
      if (res) {
        refetch();
        toast.success("Operator has been deleted successfully.");
      }
    } catch (e) {
      console.log(e, "fadslfaslkd");
      toast.error("There is an while deleting operator.");
    }
  };

  
  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Joining Date",
      dataIndex: "datetime",
      key: "datetime",
      render: (_, record) => {
        return <div>{dayjs(record?.datetime).format("DD/MM/YYYY")}</div>;
      },
    },
    {
      title: "Membership",
      dataIndex: "license",
      key: "license",

      render: (_, record) => {
        return (
          <div className="hover:underline underline cursor-pointer flex flex-row gap-2">
            {record?.license?.map((element, idx) => {
              return (
                <div
                  className={`${
                    element?.type === "premium"
                      ? "text-green-500"
                      : "text-blue-500"
                  }`}
                >
                  {element?.type
                    ? element?.type?.charAt(0)?.toUpperCase() +
                      element?.type?.slice(1)
                    : "No subscription"}
                </div>
              );
            })}
          </div>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const menu = (
          <Menu style={{ width: "170px" }} className="!text-[#6F767E]">
            <Menu.Item key="1">
              {" "}
              <Link
                to={`${routes.MANAGE_CREATORS_VIEW}/${record?.key}`}
                path={routes.MANAGE_CREATORS_VIEW}
                className="flex items-center gap-2"
              >
                <Eye className="h-[16px] w-[16px]" color="#6F767E" />{" "}
                <span className="!text-[#6F767E]"> View Details</span>
              </Link>{" "}
            </Menu.Item>
            <Menu.Item key="4">
              <div className="flex items-center gap-2">
                <Switch
                  defaultChecked
                  checked={record?.isAvailable}
                  onChange={(checked) =>
                    handleEnableDisable(
                      record?.key,
                      record?.isAvailable,
                      record
                    )
                  }
                  size="small"
                />
                <span className="!text-[#6F767E]">Enable / Disable</span>
              </div>
            </Menu.Item>
            <Menu.Item key="5">
              <Popconfirm
                title="Delete creator"
                description="Are you sure you want to delete this creator?"
                onConfirm={() => handleDeleteCreator(record?.key)}
                // onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <div className="flex items-center gap-2">
                  <Trash2 className="h-[16px] w-[16px]" color="#6F767E" />
                  <span className="!text-[#6F767E]">Delete</span>
                </div>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        );

        return (
          <Dropdown overlay={menu} trigger={["click"]}>
            <EllipsisOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
          </Dropdown>
        );
      },
    },
  ];
  const handleTableChange = (paginationConfig) => {
    setPagination((prev) => ({
      ...prev,
      page: paginationConfig.current,
      limit: paginationConfig.pageSize,
    }));
  };
  return (
    <div style={{ overflowX: "auto" }} className="overflow-x-auto">
      {/* <div className = ""> */}
      <Table
        columns={columns.map((col) => ({ ...col, width: 150 }))}
        dataSource={datas}
        pagination={{
          pageSize: pagination?.limit,
          current: pagination?.page,
          total: pagination?.totalPages * pagination?.limit,
          position: ["bottomLeft"],
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50"],
        }}
        onChange={(paginationConfig) => {
          handleTableChange(paginationConfig);
        }}
        rowClassName={(_, index) =>
          index % 2 === 0 ? "bg-gray-50" : "bg-white"
        }
        bordered={false}
        className="custom-table"
        scroll={{ x: "max-content" }}
        style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)" }}
      />
      {/* </div> */}
      <div className="icon-atom"> </div>
    </div>
  );
}

export default ManageCreatorTables;
