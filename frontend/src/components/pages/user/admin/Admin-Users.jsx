import { useEffect, useState } from "react";
import { global } from "../../../../helpers/global";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");
  const getUsers = async () => {
    try {
      const URI = global.url + "user";
      const response = await fetch(URI, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="userList">
      <table className="userList-table">
        <thead className="userList-table-head">
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Role</th>
            <th>Options</th>
          </tr>
        </thead>
        {users.map((user, index) => {
          return (
            <tbody className="userList-table-body" key={index}>
              <tr>
                <th>{user._id}</th>
                <th>{user.name}</th>
                <th>{user.lastname}</th>
                <th>{user.email}</th>
                <th>{user.role}</th>
                <th>
                  <FontAwesomeIcon icon={faPen} />{" "}
                  <FontAwesomeIcon icon={faTrash} />
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AdminUsers;
