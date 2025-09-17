import React, { useEffect, useState } from "react";
import TaskFilters from "../../components/filters/TaskFilters";
import TasksTables from "../../components/tables/TasksTables";
import api from "../../utils/api";
function ManageTasks() {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    task_type: "all",
    date_range: "",
    title: "",
  });
  const [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
    totalPages: 0,
    total: 0,
  });

  const getTasks = async () => {
    try {
      const res = await api.get(
        `api/admin/getAllTasks?page=${pagination?.page}&limit=${pagination?.limit}`
      );
      if (res) {
        setTasks(res?.data);
      }
      if (pagination?.totalPages !== res?.pagination?.totalPages) {
        setPagination((prev) => ({
          ...prev,
          totalPages: res?.pagination?.totalPages,
        }));
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {400
    getTasks();
  }, [pagination?.page]);
  return (
    <div className="flex flex-col gap-[16px] w-full overflow-auto">
      <h1 className="font-bold text-[14px] text-[#151515]">All Latest Tasks</h1>
      <TaskFilters />
      <div className="mt-[21px]">
        <TasksTables
          tasks={tasks}
          pagination={pagination}
          setPagination={setPagination}
        />
      </div>
    </div>
  );
}

export default ManageTasks;
