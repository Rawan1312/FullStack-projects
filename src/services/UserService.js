import axios from "axios";

const baseURL = "http://localhost:5125/api/v1/users";
const authURL = "http://localhost:5125/api/v1/auth";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${authURL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
export const getAllUsers = async (
  pageNumber = 1,
  pageSize = 3,
  searchValue = "",
  sortOrder = "name_asc"
) => {
  try {
    const token = localStorage.getItem("token");
    const params = new URLSearchParams();

    params.append("pageNumber", pageNumber);
    params.append("pageSize", pageSize);

    if (searchValue) {
      params.append("search", searchValue);
    }

    if (sortOrder) {
      params.append("sortOrder", sortOrder);
    }

    const response = await axios.get(`${baseURL}?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${baseURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};
export const updateUser = async (id, userData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${baseURL}/${id}`, userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
export const SignInUser = async (email, password) => {
  const user = {
    Email: email,
    Password: password,
  };
  try {
    // const token = localStorage.getItem("token");
    const response = await axios.post(`${authURL}/login`, user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${authURL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};
