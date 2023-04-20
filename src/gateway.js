import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users"


export const fetchUserById = (id) => fetch(`${URL}/${id}`).then(response => response.json())

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await axios.get(URL);
    return response.data;
  }
);
export const addUser = createAsyncThunk(
  "users/addUser",
  async (user) => {
    const response = await axios.post(`${URL}`, { ...user });
    return response.data;
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id) => {
    await axios.delete(`${URL}/${id}`);
    return id;
  }
);
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (user) => {
    const response = await axios.put(`${URL}/${user.id}`, { ...user });
    return response.data;
  }
);