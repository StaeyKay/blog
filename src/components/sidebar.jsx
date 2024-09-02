import React from "react";
import { NavLink } from "react-router-dom";
import K from "../constants";

const Sidebar = () => {
  return (
    <div className="bg-[#1a1a1a] min-h-screen w-64 text-white font-bold p-10">
      <div>Logo div</div>
      <div className="flex flex-col gap-5 text-[#33bbff]">
        {K.DASHBOARDLINKS.map((item, index) => (
          <NavLink to={item.path} key={index}>
            <div className="flex gap-2 hover:bg-[#36454F] hover:p-2 hover:rounded-md">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
