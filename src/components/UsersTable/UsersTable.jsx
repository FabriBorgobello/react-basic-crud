import React from "react";
import css from "./UsersTable.module.css";

const DEFAULT_VALUE = {
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
};

const UsersTable = ({ users, deleteUser, setSelectedUser }) => (
  <div className={css.container}>
    <div className={css.toolbar}>
      <button
        className={css.tableActionButton}
        onClick={() => setSelectedUser(DEFAULT_VALUE)}
      >
        Add User
      </button>
    </div>
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
        {users.length === 0 && (
          <tr className={css.tableRow}>
            <td className={css.tableCell}>
              <p className={css.emptyState}>No users found</p>
            </td>
          </tr>
        )}
        {users.map((user) => (
          <UserTableRow
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setSelectedUser={setSelectedUser}
          />
        ))}
      </tbody>
    </table>
  </div>
);

export default UsersTable;

const UserTableRow = ({ user, deleteUser, setSelectedUser }) => (
  <tr className={css.tableRow}>
    <td className={css.tableCell}>{user?.name}</td>
    <td className={css.tableCell}>{user?.username}</td>
    <td className={css.tableCell}>{user?.email}</td>
    <td className={css.tableActions}>
      <button
        className={css.tableActionButton}
        onClick={() => setSelectedUser(user)}
      >
        Edit
      </button>
      <button
        className={css.tableActionButton}
        onClick={() => deleteUser(user?.id)}
      >
        Delete
      </button>
    </td>
  </tr>
);
