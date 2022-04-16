import { useEffect, useState } from "react";
import {
  deleteEndpoint,
  getEndpoint,
  postEndpoint,
  putEndpoint,
} from "../../../api";

const useUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const users = await getEndpoint("/users");
        setData(users);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const createUser = async (user) => {
    try {
      const newUser = await postEndpoint("/users", user);
      setData([...data, newUser]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const updateUser = async (user) => {
    try {
      const updatedUser = await putEndpoint(`/users/${user.id}`, user);
      setData(data.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await deleteEndpoint(`/users/${userId}`);
      setData(data.filter((u) => u.id !== userId));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return { data, isLoading, error, createUser, updateUser, deleteUser };
};

export default useUsers;
