import React, { useState } from "react";
import UsersForm from "../../components/UsersForm/UsersForm";
import UsersTable from "../../components/UsersTable/UsersTable";
import useUsers from "../../hooks/useUsers";

const UsersPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const {
    data: users,
    isLoading,
    error,
    deleteUser,
    createUser,
    updateUser,
  } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Users</h1>
      {selectedUser ? (
        <UsersForm
          createUser={createUser}
          updateUser={updateUser}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />
      ) : null}
      <UsersTable
        users={users}
        deleteUser={deleteUser}
        setSelectedUser={setSelectedUser}
      />
    </div>
  );
};

export default UsersPage;
