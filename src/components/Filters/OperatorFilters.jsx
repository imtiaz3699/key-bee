import { Button, Input, Popover, Select, Spin } from "antd";
import axios from "axios";
import { ChevronUp, CircleX, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import api from "../../utils/api";

function OperatorFilters({ filters, setFilters, setStatus, status }) {
  const [listFilters, setListFilters] = useState([]);
  const [selectedValue, setSelectValue] = useState("");
  const [inputName, setInputName] = useState("name");
  const [options, setOptions] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [text, setText] = useState("");
  const fetchUsers = async (search) => {
    if (!search) {
      setOptions([]);
      return;
    }
    setFetching(true);
    try {
      const res = await api.get(
        `api/admin/getalloperators?name=${
          inputName === "name" ? search : ""
        }&email=${inputName === "email" ? search : ""}&phone_no=${
          inputName === "phone_no" ? search : ""
        }`
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
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setFetching(false);
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
        <input type="date" className="w-full  rounded px-2 py-1 bg-[#FFC750]" />
        <span className="font-medium">To</span>
        <input type="date" className="w-full  rounded px-2 py-1 bg-[#FFC750]" />
      </div> */}

      {/* Status */}
      <div className="flex items-center gap-3 mb-3">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={status === "approved"}
            onChange={(e) =>
              setStatus((prev) => (prev === "approved" ? "" : "approved"))
            }
          />{" "}
          Approved
        </label>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={status === "not_approved"}
            onChange={(e) =>
              setStatus((prev) =>
                prev === "not_approved" ? "" : "not_approved"
              )
            }
          />{" "}
          Not Approved
        </label>
      </div>

      {/* Search */}
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
                fetchUsers(val);
              }}
              onChange={(value) => {
                // fires when selecting
                setSelectValue(value);
                console.log(value, "selected value");
              }}
              onClear={() => {
                setSelectValue("");
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
              onChange={(e) => setSelectValue(e.target.value)} // only update local state
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
              setSelectValue("");
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
              setSelectValue("");
              setSearchText("");
            }}
          >
            Agent Email
          </p>
        )}
        {inputName !== "phone_no" && (
          <p
            className="text-[#454958] font-medium text-[16px] cursor-pointer"
            onClick={() => {
              setInputName("phone_no");
              setSelectValue("");
              setSearchText("");
            }}
          >
            Agent Phone Number
          </p>
        )}
      </div>
    </div>
  );
  useEffect(() => {
    const newFilters = [];

    // add status if exists
    if (status) {
      newFilters.push({ key: "status", value: status });
    }

    // add filters dynamically
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        newFilters.push({ key, value });
      }
    });

    setListFilters(newFilters);
  }, [filters, status]);
  return (
    <>
      <div className="flex flex-wrap flex-row  gap-3">
        {listFilters?.map((element, idx) => {
          return (
            <p
              key={element?.key}
              className="border-[1px] border-[#D9D9D9] py-[8px] px-[12px] rounded-[6px] text-[#000000] font-medium text-[14px] flex flex-row items-center gap-1"
              onClick={() =>
                element?.key === "status" ? setStatus("") : setFilters({})
              }
            >
              {element?.key === "status"
                ? element?.value?.charAt(0).toUpperCase() +
                  element?.value?.slice(1)
                : element?.key?.charAt(0).toUpperCase() +
                  element?.key?.slice(1)}{" "}
              <X className="font-bold w-[16px] h-[16px] cursor-pointer" />{" "}
            </p>
          );
        })}
      </div>
      <div className="flex flex-row items-center gap-3">
        <p
          className="text-red-500 font-medium cursor-pointer"
          onClick={() => {
            setFilters({});
            setText("");
            setSearchText("");
            setInputName("name");
            setStatus("");
            setSelectValue("");
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
    </>
  );
}

export default OperatorFilters;
