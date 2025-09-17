import React from "react";
import { Table, Pagination, Dropdown, Menu, Switch } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Eye } from "lucide-react";
import { CircleCheck, Trash2 } from "lucide-react";
import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";
function ManageCreatorTables() {
      const data = [
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "1",
      name: "Chelsie Johnson",
      email: "chelsiekeybee@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "2",
      name: "Jaiden Nixon",
      email: "jaiden.n@gmail.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    {
      key: "3",
      name: "Ace Foley",
      email: "ace.fo@yahoo.com",
      phone: "+1 44 2569 5869 696",
      datetime: "06/12/2025 - 05:06PM",
      license: "PDF File",
    },
    // add more rows here
  ];
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const menu = (
    <Menu style={{ width: "170px" }} className="!text-[#6F767E]">
      <Menu.Item key="1">
        {" "}
        <Link
          to={routes.MANAGE_CREATORS_VIEW}
          path={routes.MANAGE_CREATORS_VIEW}
          className="flex items-center gap-2"
        >
          <Eye className="h-[16px] w-[16px]" color="#6F767E" />{" "}
          <span className="!text-[#6F767E]"> View Details</span>
        </Link>{" "}
      </Menu.Item>
      <Menu.Item key="2">
        <div className="flex items-center gap-2">
          <CircleCheck className="h-[16px] w-[16px]" color="#6F767E" />
          <span className="!text-[#6F767E]">Approve</span>{" "}
        </div>{" "}
      </Menu.Item>
      <Menu.Item key="3">
        <div className="flex items-center gap-2">
          <CircleX className="h-[16px] w-[16px]" color="#6F767E" />
          <span className="!text-[#6F767E]">Reject</span>{" "}
        </div>{" "}
      </Menu.Item>
      <Menu.Item key="4">
        <div className="flex items-center gap-2">
          <Switch
            defaultChecked
            onChange={onChange}
            size="small"
            className="text-[]"
          />
          <span className="!text-[#6F767E]">Enable / Disable</span>
        </div>{" "}
      </Menu.Item>
      <Menu.Item key="5">
        <div className="flex items-center gap-2">
          <Trash2 className="h-[16px] w-[16px]" color="#6F767E" />
          <span className="!text-[#6F767E]">Delete</span>{" "}
        </div>{" "}
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "Full Name",
      dataIndex: "name",
      key: "name",
      // responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "E-Mail",
      dataIndex: "email",
      key: "email",
      // responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      // responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Date & Time",
      dataIndex: "datetime",
      key: "datetime",
      // responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Agent License",
      dataIndex: "license",
      key: "license",
      // responsive: ["xs", "sm", "md", "lg", "xl"],
      render: (text) => (
        <div className=" hover:underline underline">{text}</div>
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
      // responsive: ["xs", "sm", "md", "lg", "xl"],
    },
  ];
  return (
    <div style={{ overflowX: "auto" }} className="overflow-x-auto">
      {/* <div className = ""> */}
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
      {/* </div> */}
    </div>
  )
}

export default ManageCreatorTables