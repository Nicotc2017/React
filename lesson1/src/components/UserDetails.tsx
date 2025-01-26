import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById, getUsers } from "../services/userService";

interface UserDetailsProps {}

const UserDetails: FunctionComponent<UserDetailsProps> = () => {
  let { id } : any = useParams();
  let [user, setUser] = useState<any>([]);

  useEffect(() => {
    getUserById(Number(id))
      .then((response) => setUser(response))
      .catch((err) => console.log(err));

    const usersArr = async () => {
      try {
        const users = await getUsers();
        setUser(users);
      } catch (error) {
        console.log(error);
      }
    };
    usersArr();
  }, []);

  return (
    <div>
      {id <= user.length ? (
        <div>
          <h2 className="display-2 my-3">User Details</h2>
          <p>Name: {user.name}</p>
          <p>E-mail: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ) : (
        <h2 className="display-2 my-3">User Not Found</h2>
      )}
    </div>
  );
};

export default UserDetails;
