import { useEffect, useState } from "react";

const useUsers = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw new Error(response.statusText);
        }
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
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const json = await response.json();
        setData([...data, json]);
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const updateUser = async (user) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${user.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      if (response.ok) {
        const json = await response.json();
        setData(data.map((e) => (e.id === json.id ? json : e)));
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/users/${userId}`,
        { method: "DELETE" }
      );
      if (response.ok) {
        setData((prev) => prev.filter((e) => e.id !== userId));
      } else {
        throw new Error(response.statusText);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };

  return { data, isLoading, error, createUser, updateUser, deleteUser };
};

export default useUsers;
