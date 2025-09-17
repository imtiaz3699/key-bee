import React from "react";
import LoginForm from "../../components/LoginForm";

function Login({messageApi}) {
  return (
    <section className="p-6 flex  md:flex-row justify-between gap-6 h-full w-full">
      <div className="w-full md:w-[50%] flex flex-col justify-between items-start">
        <div className="flex flex-row items-center gap-2">
          <img src="/logo.png" className="" />
          <p className="text-[24px] font-normal text-[#151515]">KEYBEE</p>
        </div>
        <div className="w-full">
          <div className="flex justify-center  w-full ">
            <LoginForm messageApi={messageApi} />
          </div>
        </div>
        <div className="w-full flex flex-row justify-between text-gray-400">
          <p>Copyright @ 2025 KeyBee.</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div
        className="w-full hidden md:block md:w-[50%] bg-no-repeat bg-cover bg-center rounded-[10px]  "
        style={{ backgroundImage: "url('/Frame 1321315152.png')" }}
      ></div>
    </section>
  );
}

export default Login;
