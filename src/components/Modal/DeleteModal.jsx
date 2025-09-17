import React from "react";
import { Modal } from "antd";
import { CircleX } from "lucide-react";
import CustomBtn from "../Buttons/CustomBtn";
import { OctagonAlert } from "lucide-react";
const DeleteModal = ({
  open,
  title = "Confirm Action",
  okText = "Yes",
  cancelText = "No",
  content = "Are you sure you want to perform this action?",
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      title={
        <div className="flex flex-row items-center justify-between  px-2 rounded-[5px]">
          <p className="font-medium text-[20px] text-gray-500 py-2">{title}</p>
          <div onClick={onCancel} className="cursor-pointer">
            <CircleX color="#A0A0A0" />
          </div>
        </div>
      }
      closable={false}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      footer={
        <div className="flex flex-row items-center justify-end gap-3">
          <CustomBtn onClick={onCancel} btnText={"Cancel"} />
          <CustomBtn onClick={onOk} btnText={"Delete"} isActive={true} />
        </div>
      }
      style={{ height: "500px" }}
      centered
    >
      {typeof content === "string" ? (
        <p className="text-center text-[16px] flex flex-col gap-2 items-center justify-center">
          <OctagonAlert size={100} color="#F69133" />
          {content}
        </p>
      ) : (
        content
      )}
    </Modal>
  );
};

export default DeleteModal;
