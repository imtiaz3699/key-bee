import { Button, Popover, Select, Spin } from "antd";
import { ChevronUp, X } from "lucide-react";
import React, { useState } from "react";
import api from "../../utils/api";

function CreatorFilters({ filters, setFilters }) {
  const [inputName, setInputName] = useState("name");
  const [selectedValue, setSelectedValue] = useState("");
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const fetchCreators = async (search) => {
    try {
      const res = await api.get(
        `api/admin/getallcreators?name=${
          inputName === "name" ? search : ""
        }&email=${inputName === "email" ? search : ""}`
      );
      const data = res?.data?.map((user) => ({
        value: user?._id,
        label:
          inputName === "name"
            ? user?.first_name + user?.last_name
            : inputName === "email"
            ? user?.email
            : user?.phone_number,
      }));
      setOptions(data);
      console.log(res, "afds;fjahlsdfjhasdkfjd");
    } catch (e) {
      console.log(e);
    }
  };
  const content = (
    <div className=" max-w-[472px] w-full md:w-[472px] p-4">
      <div className="flex items-center justify-between w-full mb-3">
        <h3 className="font-bold text-[16px] text-[#454958] ">Filter By</h3>
        <ChevronUp />
      </div>
      {/* Date Range */}
      {/* <div className="flex items-center gap-2 mb-3">
        <input type="date" className="w-full rounded px-2 py-1 bg-[#FFC750]" />
        <span className="font-medium">To</span>
        <input type="date" className="w-full rounded px-2 py-1 bg-[#FFC750]" />
      </div> */}

      {/* Status */}
      {/* <div className="flex items-center gap-3 mb-3">
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Approved
        </label>
        <label className="flex items-center gap-1">
          <input type="checkbox" /> Not Approved
        </label>
      </div> */}

      {/* Search */}
      {/* <div className="flex flex-col gap-2 mb-2">
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
      </div> */}

      {/* Extra fields */}
      {/* <div className="flex flex-col gap-2 mt-5">
        <p className="text-[#454958] font-medium text-[16px]">Agent Email</p>
        <p className="text-[#454958] font-medium text-[16px]">
          Agent Phone Number
        </p>
      </div> */}

      <div className="flex">
        <div className="flex flex-row items-end gap-2 w-full">
          <div className="w-full relative ">
            <label className="text-[#454958] font-medium text-[16px]">
              Agent {inputName}
            </label>
            <Select
              showSearch
              allowClear
              className="w-full !h-[40px]"
              name={inputName}
              value={selectedValue} // selected option
              searchValue={searchText} // typed input text
              onSearch={(val) => {
                // fires while typing
                setSearchText(val);
                fetchCreators(val);
              }}
              onChange={(value) => {
                // fires when selecting
                setSelectedValue(value);
                console.log(value, "selected value");
              }}
              onClear={() => {
                setSelectedValue("");
                setSearchText("");
                setFilters({});
              }}
              onSelect={(value, dd) => {
                setText(dd?.label);
                console.log(value, dd, "1af1sd3f12a3sd21f3as");
              }}
              placeholder="Select a person"
              filterOption={false} // must disable local filtering
              notFoundContent={fetching ? <Spin size="small" /> : null}
              options={options}
            />
            {/* <input
              type="text"
              value={selectedValue}
              name={inputName}
              onChange={(e) =>  setSelectedValue(e.target.value)} // only update local state
              placeholder={`Search by ${inputName}.`}
              className="flex-1 rounded px-2 h-[40px] border-[1px] border-gray-300 w-full mt-1"
            /> */}
          </div>
          <Button
            type="primary"
            className="!bg-[#FFC750] !text-black !h-[40px]"
            onClick={() =>
              setFilters((prev) => ({
                [inputName]: text,
              }))
            }
          >
            Search
          </Button>
        </div>
      </div>

      {/* Extra fields */}
      <div className="flex flex-col gap-2 mt-5">
        {inputName !== "name" && (
          <p
            className="text-[#454958] font-medium text-[16px] cursor-pointer"
            onClick={() => {
              setInputName("name");
              setSelectedValue("");
              setSearchText("");
            }}
          >
            Agent Name
          </p>
        )}
        {inputName !== "email" && (
          <p
            className="text-[#454958] font-medium text-[16px] cursor-pointer"
            onClick={() => {
              setInputName("email");
              setSelectedValue("");
              setSearchText("");
            }}
          >
            Agent Email
          </p>
        )}
        {/* {inputName !== "phone_no" && (
          <p
            className="text-[#454958] font-medium text-[16px] cursor-pointer"
            onClick={() => {
              setInputName("phone_no");
              setSelectedValue("");
              setSearchText("");
            }}
          >
            Agent Phone Number
          </p>
        )} */}
      </div>
    </div>
  );
  return (
    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-end">
      {/* <div className="flex flex-wrap flex-row  gap-3">
        {filters?.map((element, idx) => {
          return (
            <p
              key={element}
              className="border-[1px] border-[#D9D9D9] py-[8px] px-[12px] rounded-[6px] text-[#000000] font-medium text-[14px] flex flex-row items-center gap-1"
            >
              {element}{" "}
              <X className="font-bold w-[16px] h-[16px] cursor-pointer" />{" "}
            </p>
          );
        })}
      </div> */}

      <div className="flex flex-row items-center gap-3">
        <p
          className="text-red-500 font-medium cursor-pointer"
          onClick={() => {
            setFilters({});
            setText("");
            setSearchText("");
            setInputName("name");
            setSelectedValue("");
          }}
        >
          Reset
        </p>
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

export default CreatorFilters;
