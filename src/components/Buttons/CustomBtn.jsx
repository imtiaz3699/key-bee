import React from "react";

function CustomBtn({
  btnText,
  startIcon,
  endIcon,
  onClick,
  type = "button",
  className = "",
  isActive
}) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer
        flex items-center justify-center gap-2
        px-4 py-2 rounded-md font-medium
        ${isActive ? "bg-[#FFC750] text-black hover:bg-[#e6b245]" : "bg-transparent border-[1px] border-gray-300 font-medium text-[#73767B]"} transition-colors duration-200
        disabled:opacity-60 disabled:cursor-not-allowed
        ${className}
      `}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{btnText}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
}

export default CustomBtn;
