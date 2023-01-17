import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div onClick={() => navigate(":userId")}>user 1</div>
      <div onClick={() => navigate(":userId")}>user 1</div>
      <div onClick={() => navigate(":userId")}>user 1</div>

      <Outlet />
    </div>
  );
};

export default Users;
