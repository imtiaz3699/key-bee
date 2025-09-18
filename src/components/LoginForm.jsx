import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../utils/utils";
import { useAuth } from "../context/userContext";
import Cookies from "js-cookie";
import { routes } from "../utils/routes";
function LoginForm({ messageApi }) {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { user, token, setUser, setToken } = useAuth();
  if (token) {
    return <Navigate to={routes.DASHBOARD} replace />;
  }
  const onFinish = async (values) => {
    try {
      const res = await axios.post(`${baseUrl}api/admin/adminsignin`, {
        email: values?.email,
        password: values?.password,
      });
      if (res?.status === 200) {
        messageApi.open({
          type: "success",
          content: "Login Successful",
        });
        setToken(res?.data?.token);
        setUser(res?.data?.admin);
        Cookies.set("user", JSON.stringify(res?.data?.admin), { expires: 7 });
        Cookies.set("token", res?.data?.token, { expires: 7 });
        navigate(routes.DASHBOARD);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation failed:", errorInfo);
  };
  return (
    <div className="md:max-w-[496px] w-full ">
      <div className="flex flex-col gap-[12px] text-center">
        <h1 className="font-bold text-[25px] md:text-[30px]  lg:text-[40px] leading-[150%] ">
          Welcome to KEYBEE
        </h1>
        <p className="text-[#959595] text-[16px] font-normal">
          Enter your email and password to access your account.
        </p>
      </div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="space-y-4"
        requiredMark={false}
      >
        <Form.Item
          label={<p className="font-medium">Email</p>}
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            placeholder="chelsieljohnson@keybee.com"
            className="h-12 rounded-lg border-border"
            style={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
            }}
          />
        </Form.Item>

        <Form.Item
          label={<p className="font-medium">Password</p>}
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="••••••••••••"
            className="h-12 rounded-lg"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{
              backgroundColor: "hsl(var(--background))",
              borderColor: "hsl(var(--border))",
            }}
          />
        </Form.Item>

        <div className="flex items-center justify-between">
          <Form.Item name="remember" valuePropName="checked" className="!mb-0">
            <Checkbox className="text-sm !text-[#959595]">Remember Me</Checkbox>
          </Form.Item>
          <Link href="#" className="text-sm !text-[#FFC750] hover-underline">
            Forget Your Password?
          </Link>
        </div>

        <Form.Item className="mb-0">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full !text-[16px] font-medium rounded-lg !bg-[#FFC750] !text-gray-900 !h-[44px]"
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
