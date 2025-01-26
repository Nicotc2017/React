import { FunctionComponent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../services/userService";
interface UsersProps {}

const Users: FunctionComponent<UsersProps> = () => {
  let [users, setUsers] = useState<any>([]);
  
  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((err) => console.log(err));
  }, []);

  console.log(users);
  return (
    <>
      <h1>Users</h1>
      {users.length ? (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Users</p>
      )}
    </>
  );
};

export default Users;
