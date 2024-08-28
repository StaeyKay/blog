import React from "react";

const SubHeader = ({ title, subtext }) => {
  return (
    <div className="flex flex-col mb-3">
      <h1 className="underline font-bold">{title}</h1>
      {subtext && <p className="text-lg font-bold">{subtext}</p>}
    </div>
  );

  
};

export default SubHeader;
