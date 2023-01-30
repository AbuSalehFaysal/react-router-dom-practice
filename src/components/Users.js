import React from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <div onClick={() => navigate("1")}>user 1</div>
      <div onClick={() => navigate("2")}>user 2</div>
      <div onClick={() => navigate("3")}>user 3</div>

      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUsers ? <h2>Active Users</h2> : <h2>All Users</h2>}
    </div>
  );
};

export default Users;
