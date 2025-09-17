import React from "react";
import {
  Table,
  Pagination,
  Dropdown,
  Menu,
  Switch,
  Popconfirm,
  Button,
  message,
} from "antd";
import toast, { Toaster } from "react-hot-toast";
import { EllipsisOutlined } from "@ant-design/icons";
import { Eye } from "lucide-react";
import { CircleCheck, Trash2 } from "lucide-react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
import dayjs from "dayjs";
import { baseUrl } from "../../utils/utils";
import api from "../../utils/api";
function ManageOperatorTables({ data, pagination, setPagination, refetch }) {
  const datas =
    data?.map((element, idx) => {
      return {
        key: element?._id,
        name: element?.first_name + element?.last_name,
        email: element?.email,
        phone: element?.phone_number,
        datetime: dayjs(element?.datetime).format("DD/MM/YYYY"),
        license: element?.license_documents?.map((item, idx) => {
          const str = item.startsWith("/") ? item.slice(1) : item;
          return baseUrl + str;
        }),
        is_verify: element?.is_verify,
        isAvailable: element?.isAvailable,
      };
    }) ?? [];
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleApproveOperator = async (id) => {
    try {
      const res = await api.patch(`api/admin/approveOperator/${id}`);
      if (res) {
        toast.success("Operator has been approved.");
        refetch();
      }
    } catch (e) {
      console.log(e, "fadslflasdj");
    }
  };
  const handleRejectOperator = async (id) => {
    try {
      const res = await api.patch(`api/admin/rejectOperator/${id}`);
      if (res) {
        toast.success("Operator has been rejected.");
        refetch();
      }
    } catch (e) {
      console.log(e, "fadslflasdj");
    }
  };
  const handleDeleteOperator = async (id) => {
    try {
      const res = await api.delete(`api/admin/deleteOperator/${id}`);
      if (res) {
        refetch();
        toast.success("Operator has been deleted successfully.");
      }
    } catch (e) {
      console.log(e, "fadslfaslkd");
      toast.error("There is an while deleting operator.");
    }
  };
  const handleEnableDisable = async (id, isAvailable) => {
    const payload = {
      isAvailable: isAvailable === true ? false : true,
    };
    try {
      const res = await api.patch(`api/admin/enableDisable/${id}`, payload);
      if (res) {
        refetch();
        toast.success("Operator availability updated.");
      }
    } catch (e) {
      console.log(e);
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
      title: "Date & Time",
      dataIndex: "datetime",
      key: "datetime",
    },
    {
      title: "Agent License",
      dataIndex: "license",
      key: "license",
      render: (text) => <div className=" hover:underline underline">File</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        const menu = (
          <Menu style={{ width: "170px" }} className="!text-[#6F767E]">
            <Menu.Item key="1">
              <Link
                to={`${routes.VIEW_OPERATOR}/${record?.key}`}
                className="flex items-center gap-2"
              >
                <Eye className="h-[16px] w-[16px]" color="#6F767E" />
                <span className="!text-[#6F767E]">View Details</span>
              </Link>
            </Menu.Item>
            {!record?.is_verify && (
              <Menu.Item key="2">
                <Popconfirm
                  title="Approve Operator?"
                  description="Are you sure you want to approve this user?"
                  onConfirm={() => handleApproveOperator(record?.key)}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <div className="flex items-center gap-2">
                    <CircleCheck
                      className="h-[16px] w-[16px]"
                      color="#6F767E"
                    />
                    <span className="!text-[#6F767E]">Approve</span>
                  </div>
                </Popconfirm>
              </Menu.Item>
            )}

            {record?.is_verify && (
              <Menu.Item key="3">
                <Popconfirm
                  title="Reject operator?"
                  description="Are you sure you want to reject this user?"
                  onConfirm={() => handleRejectOperator(record?.key)}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <div className="flex items-center gap-2">
                    <CircleX className="h-[16px] w-[16px]" color="#6F767E" />
                    <span className="!text-[#6F767E]">Reject</span>
                  </div>
                </Popconfirm>
              </Menu.Item>
            )}

            <Menu.Item key="4">
              <div className="flex items-center gap-2">
                <Switch
                  defaultChecked
                  checked={record?.isAvailable}
                  onChange={(checked) =>
                    handleEnableDisable(record?.key, record?.isAvailable)
                  }
                  size="small"
                />
                <span className="!text-[#6F767E]">Enable / Disable</span>
              </div>
            </Menu.Item>
            <Menu.Item key="5">
              <Popconfirm
                title="Delete operator"
                description="Are you sure you want to delete this operator?"
                onConfirm={() => handleDeleteOperator(record?.key)}
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
    <>
      <div style={{ overflowX: "auto" }} className="overflow-x-auto">
        <div>
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
        </div>
      </div>
    </>
  );
}

export default ManageOperatorTables;
