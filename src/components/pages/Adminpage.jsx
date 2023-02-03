import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useUsers } from "../assets/hooks/users";
import { Navbar } from "../layers/Navbar";
import { addproduct } from "../routes";

export function Users() {
  const { users, isLoading } =useUsers()

  return (
    <div className="users">
    <h3>all users</h3>
      <div className="users-con">
      {users?.map((user) => (
        <div key={user?.id} className="user-info">
          <Link to={`/admin/users/user/${user?.id}`}>
          {user?.username}
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
}

function Adminpage() {
  const { users, isLoading } = useUsers();
  return (
    <>
      <Navbar />
      <div className="admin">
        <div className="side-bar">
          {/* <Link to="/admin/users"> users</Link> */}
          <Link to={addproduct}><p>Add product</p></Link>
          <Link to="/admin/users"> Users</Link>

        </div>
        <Outlet />
        {/* <div className="users-area">
          <h3>All users in website</h3>
          <Users users={users} />
        </div> */}
      </div>
    </>
  );
}

export default Adminpage;
