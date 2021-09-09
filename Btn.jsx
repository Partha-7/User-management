import React from "react";

const Btn = ({ label, type, classnames }) => {
  return (
    <div className="">
      <button className={classnames} type={type}>
        {label}
      </button>
    </div>
  );
};

export default Btn;
