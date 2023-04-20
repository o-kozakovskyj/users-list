import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, deleteUser, addUser, updateUser } from "../gateway";

const initialState = {
  users: [],
  status: 'idle',
  error: null,
  searchTerm: '',
  currentUser: {},
}
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUserById: (state, action) => {
      state.currentUser= state.users.find(user=> user.id.toString() === action.payload.toString())
    },
    searchUsers: (state, action) => {
      state.searchTerm = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        const id = action.payload;
        state.users = state.users.filter((user) => user.id.toString() !== id.toString());
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload)
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id.toString() !== action.payload.id.toString());
        state.users.unshift(action.payload)
        state.status = "succeeded";
        state.error = null;
      })
  }
});
export const { getUserById,searchUsers } = usersSlice.actions;
export const getUsers = (state) => state.users.users;
export const selectUsersBySearch = (state) => {
  const { searchTerm, users } = state.users;
  if (searchTerm === "") {
    return users;
  }
  return users.filter((user) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.username.toLowerCase().includes(searchTerm.toLowerCase());
  });
}
export const currentUser = (state) => state.users.currentUser;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export default usersSlice.reducer;