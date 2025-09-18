import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { Popover, Button } from "antd";
import { X } from "lucide-react";
import ManageCreatorTables from "../../components/tables/ManageCreatorTables";
import api from "../../utils/api";
import CreatorFilters from "../../components/Filters/CreatorFilters";

function ManageCreators() {
  const [filters, setFilters] = useState({ name: "", email: "" });
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    totalPages: 0,
    total: 0,
  });

  const fetchCreator = async () => {
    try {
      const res = await api.get(
        `api/admin/getallcreators?page=${pagination?.page}&limit=${pagination?.limit}&name=${filters?.name?.toLocaleLowerCase() ?? ""}&email=${filters?.email?.toLocaleLowerCase() ?? ""}`
      );
      if (res) {
        setData(res?.data);
        if (pagination?.totalPages !== res?.pagination?.totalPages) {
          setPagination((prev) => ({
            ...prev,
            totalPages: res?.pagination?.totalPages,
          }));
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchCreator();
  }, [pagination?.page, filters]);
  return (
    <div className="flex flex-col gap-[16px] w-full overflow-auto">
      <h1 className="font-bold text-[14px] text-[#151515]">Manage Creators</h1>
      <CreatorFilters filters={filters} setFilters={setFilters} />
      <div>
        <ManageCreatorTables
          data={data}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
    </div>
  );
}

export default ManageCreators;
