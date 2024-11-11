import React, { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { createUser, updateUser } from "../../services/UserService";

const UserForm = ({ existingUser }) => {
  const [name, setName] = useState(existingUser ? existingUser.name : "");
  const [email, setEmail] = useState(existingUser ? existingUser.email : "");
  const { addUser, updateUser: updateContextUser } = useUsers();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, email };

    if (existingUser) {
      const updatedUser = await updateUser(existingUser.id, userData);
      updateContextUser(updatedUser);
    } else {
      const newUser = await createUser(userData);
      addUser(newUser);
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{existingUser ? "Update" : "Add"} User</button>
    </form>
  );
};

export default UserForm;
