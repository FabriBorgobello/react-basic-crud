import React from "react";
import css from "./UsersForm.module.css";

const UsersForm = ({
  createUser,
  updateUser,
  selectedUser,
  setSelectedUser,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedUser?.id) {
      updateUser(selectedUser);
    } else {
      createUser(selectedUser);
    }
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
        <input
          onChange={handleInputChange}
          required
          className={css.input}
          type="text"
          name="name"
          id="name"
          value={selectedUser?.name}
        />
      </label>
      <label className={css.label} htmlFor="username">
        Username
        <input
          onChange={handleInputChange}
          required
          className={css.input}
          type="text"
          name="username"
          id="username"
          value={selectedUser?.username}
        />
      </label>
      <label className={css.label} htmlFor="email">
        Email
        <input
          onChange={handleInputChange}
          required
          className={css.input}
          type="email"
          name="email"
          id="email"
          value={selectedUser?.email}
        />
      </label>
      <label className={css.label} htmlFor="phone">
        Phone
        <input
          onChange={handleInputChange}
          required
          className={css.input}
          type="tel"
          name="phone"
          id="phone"
          value={selectedUser?.phone}
        />
      </label>
      <label className={css.label} htmlFor="website">
        Website
        <input
          onChange={handleInputChange}
          required
          className={css.input}
          type="text"
          name="website"
          id="website"
          value={selectedUser?.website}
        />
      </label>
      <div className={css.formBtnContainer}>
        <input
          className={css.formBtn}
          type="button"
          value="Cancel"
          onClick={() => setSelectedUser(null)}
        />
        <input className={css.formBtn} type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default UsersForm;
