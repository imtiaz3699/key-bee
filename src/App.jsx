import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import ManageOperators from "./pages/manageOperators/ManageOperators";
import { routes } from "./utils/routes";
import ManageCreators from "./pages/manageCreators/ManageCreators";
import ManageAdminUsers from "./pages/adminUsers/ManageAdminUsers";
import ManageTasks from "./pages/manageTasks/ManageTasks";
import ManageProfile from "./pages/manageProfile/ManageProfile";
import ViewOperator from "./pages/manageOperators/view/ViewOperator";
import ViewTasks from "./pages/manageTasks/view/ViewTasks";
import ManageAdminUserEdit from "./pages/adminUsers/edit/ManageAdminUserEdit";
import ManageAdminUserAdd from "./pages/adminUsers/add/ManageAdminUserAdd";
import ManageAdminUserView from "./pages/adminUsers/view/ManageAdminUserView";
import ManageCreatorsView from "./pages/manageCreators/view/ManageCreatorsView";
import { message } from "antd";
import { AuthProvider } from "./context/userContext";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { Toaster } from "react-hot-toast";
import CreatorTaskView from "./pages/manageCreators/view/CreatorTaskView";
function App() {
  const [count, setCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <Toaster />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login messageApi={messageApi} />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  {" "}
                  <Layout />
                </ProtectedRoutes>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="manage-operators" element={<ManageOperators />} />
              <Route path="view-operator/:id" element={<ViewOperator />} />
              <Route path="manage-creators" element={<ManageCreators />} />
              <Route
                path="manage-creators-view/:id"
                element={<ManageCreatorsView />}
              />
              <Route
                path="manage-creators-task-view/:id"
                element={<CreatorTaskView />}
              />
              <Route path="manage-admin-users" element={<ManageAdminUsers />} />
              <Route
                path="manage-admin-users-edit"
                element={<ManageAdminUserEdit />}
              />
              <Route
                path="manage-admin-users-add"
                element={<ManageAdminUserAdd />}
              />
              <Route
                path="manage-admin-users-view"
                element={<ManageAdminUserView />}
              />
              <Route path="manage-tasks" element={<ManageTasks />} />
              <Route path="manage-profile" element={<ManageProfile />} />
              <Route path="view-task/:id" element={<ViewTasks />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
