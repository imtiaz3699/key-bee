import React from "react";

function SwitchOne({ checked, onChange }) {
  return (
    <>
      <label className="switch">
        <input type="checkbox" defaultChecked onChange={onChange} />
        <div className="slider">
          <div className="circle relative">
            {/* {checked ? (
              <div className="text-[10px] absolute right-5">Enabled</div>
            ) : (
              <div className="text-[10px] absolute left-5">Disabled</div>
            )} */}
          </div>
        </div>
      </label>
    </>
  );
}

export default SwitchOne;
