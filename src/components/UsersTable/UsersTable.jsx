import React from "react";
import useUsers from "./hooks/useUsers";
import css from "./UsersTable.module.css";

const UsersTable = () => {
  const { data: users, isLoading, error, deleteUser } = useUsers();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tableRow}>
          <th className={css.tableCell}>Name</th>
          <th className={css.tableCell}>User</th>
          <th className={css.tableCell}>Email</th>
          <th className={css.tableActions}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} deleteUser={deleteUser} />
        ))}
        {users.length === 0 && <p className={css.emptyState}>No users found</p>}
      </tbody>
    </table>
  );
};

export default UsersTable;

const UserTableRow = ({ user, deleteUser }) => (
  <tr className={css.tableRow}>
    <td className={css.tableCell}>{user?.name}</td>
    <td className={css.tableCell}>{user?.username}</td>
    <td className={css.tableCell}>{user?.email}</td>
    <td className={css.tableActions}>
      <button className={css.tableActionButton}>Edit</button>
      <button
        className={css.tableActionButton}
        onClick={() => deleteUser(user?.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);
