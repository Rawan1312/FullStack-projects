// import React, { useState, useEffect, createContext } from "react";
// import PropTypes from "prop-types";

// import { getAllUsers, deleteUser, updateUser } from "../services/UserService";

// const content = createContext();
// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [pageNumber, setPageNumber] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [pageSize, setPageSize] = useState(5);
//   const [sortOrder, setSortOrder] = useState("name_asc");

//   const fetchUsers = async (searchValue, pageNumber, pageSize, sortOrder) => {
//     setIsLoading(true);
//     try {
//       const response = await getAllUsers(
//         pageNumber,
//         pageSize,
//         searchValue,
//         sortOrder
//       );
//       setUsers(response.data.items);
//       setTotalPages(response.data.totalPages);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(searchValue, pageNumber, pageSize, sortOrder);
//   }, [searchValue, pageNumber, pageSize, sortOrder]);

//   const removeUser = async (id) => {
//     await deleteUser(id);
//     setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== id));
//   };

//   const modifyUser = async (id, userData) => {
//     const updatedUser = await updateUser(id, userData);
//     setUsers((prevUsers) =>
//       prevUsers.map((user) => (user.userId === id ? updatedUser : user))
//     );
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         users,
//         fetchUsers,
//         removeUser,
//         modifyUser,
//         isLoading,
//         error,
//         searchValue,
//         setSearchValue,
//         pageNumber,
//         setPageNumber,
//         pageSize,
//         setPageSize,
//         sortOrder,
//         setSortOrder,
//         totalPages,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// import React, { useState, useEffect, createContext } from "react";
// import PropTypes from "prop-types";
// import { getAllUsers, deleteUser, updateUser } from "../services/UserService";
// import { useUser } from "../hooks/useUser";

// const content = useUser();
// export const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchValue, setSearchValue] = useState("");
//   const [pageNumber, setPageNumber] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [pageSize, setPageSize] = useState(5);
//   const [sortOrder, setSortOrder] = useState("name_asc");

//   const fetchUsers = async (searchValue, pageNumber, pageSize, sortOrder) => {
//     setIsLoading(true);
//     try {
//       const response = await getAllUsers(
//         pageNumber,
//         pageSize,
//         searchValue,
//         sortOrder
//       );
//       setUsers(response.data.items);
//       setTotalPages(response.data.totalPages);
//       setError(null);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(searchValue, pageNumber, pageSize, sortOrder);
//   }, [searchValue, pageNumber, pageSize, sortOrder]);

//   const removeUser = async (id) => {
//     await deleteUser(id);
//     setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== id));
//   };

//   const modifyUser = async (id, userData) => {
//     const updatedUser = await updateUser(id, userData);
//     setUsers((prevUsers) =>
//       prevUsers.map((user) => (user.userId === id ? updatedUser : user))
//     );
//   };

//   return (
//     <UserContext.Provider
//       value={{
//         users,
//         fetchUsers,
//         removeUser,
//         modifyUser,
//         isLoading,
//         error,
//         searchValue,
//         setSearchValue,
//         pageNumber,
//         setPageNumber,
//         pageSize,
//         setPageSize,
//         sortOrder,
//         setSortOrder,
//         totalPages,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };

// UserProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };
import React, { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";
import { getAllUsers, deleteUser, updateUser } from "../services/UserService";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortOrder, setSortOrder] = useState("name_asc");

  const fetchUsers = async (searchValue, pageNumber, pageSize, sortOrder) => {
    setIsLoading(true);
    try {
      const response = await getAllUsers(
        pageNumber,
        pageSize,
        searchValue,
        sortOrder
      );
      setUsers(response.data.items);
      setTotalPages(response.data.totalPages);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(searchValue, pageNumber, pageSize, sortOrder);
  }, [searchValue, pageNumber, pageSize, sortOrder]);

  const removeUser = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => prevUsers.filter((user) => user.userId !== id));
  };

  const modifyUser = async (id, userData) => {
    const updatedUser = await updateUser(id, userData);
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.userId === id ? updatedUser : user))
    );
  };

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        removeUser,
        modifyUser,
        isLoading,
        error,
        searchValue,
        setSearchValue,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        sortOrder,
        setSortOrder,
        totalPages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
