import React, { useEffect } from "react";
import Sidebar from "../../../components/sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../../../utils";

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      navigate("/auth/login");
    }
    getLoggedInUser().then((response) => {
      const user = response.user;
      const error = response.error;

      if (error) {
        navigate("/auth/login/");
      }
      if (user) {
        navigate(`/dashboard/${user.id}`);
      }
    });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
