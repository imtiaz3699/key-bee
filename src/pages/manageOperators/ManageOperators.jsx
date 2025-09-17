import React, { useEffect, useState } from "react";
import ManageOperatorTables from "../../components/tables/ManageOperatorTables";
import OperatorFilters from "../../components/Filters/OperatorFilters";
import api from "../../utils/api";
function ManageOperators() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState("");
  const [status, setStatus] = useState("");
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    totalPages: 0,
    total: 0,
  });
  const fetchList = async () => {
    try {
      const res = await api.get(
        `api/admin/getalloperators?status=${status}&name=${
          filters?.name ?? ""
        }&email=${filters?.email ?? ""}&phone_no=${
          filters?.phone_no ?? ""
        }&page=${pagination?.page}&limit=${pagination?.limit}`
      );
      setData(res?.data);
      if (pagination?.totalPages !== res?.pagination?.totalPages) {
        setPagination((prev) => ({
          ...prev,
          totalPages: res?.pagination?.totalPages,
        }));
      }
    } catch {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchList();
  }, [filters, status, pagination]);
  return (
    <div className="flex flex-col gap-[16px] w-full overflow-auto">
      <h1 className="font-bold text-[14px] text-[#151515]">Manage Operators</h1>
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-end">
        <OperatorFilters
          setFilters={setFilters}
          filters={filters}
          status={status}
          setStatus={setStatus}
        />
      </div>
      <div>
        <ManageOperatorTables
          data={data}
          pagination={pagination}
          setPagination={setPagination}
          refetch={fetchList}
        />
      </div>
    </div>
  );
}

export default ManageOperators;
