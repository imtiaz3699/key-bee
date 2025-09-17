import React from "react";

function InputOne({ placeholder,label }) {
  return (
    <div className = 'w-full flex flex-col gap-3'>
        <label className = 'font-bold text-[16px] leading-[19.6px] text-[#151515]'>{label}</label>
      <input
        placeholder={placeholder}
        className="border border-gray-200 focus:border-[#FFC750] w-full h-[44px] rounded-[6px] outline-none px-5"
      />
    </div>
  );
}

export default InputOne;
