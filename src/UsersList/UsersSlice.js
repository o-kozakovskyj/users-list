import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers, deleteUser } from "../gateway";

const initialState = {
  users: [],
  status: 'idle',
  error: null,
  searchTerm: '',
}
export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   
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
  }
});
export const getUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;
export default UsersSlice.reducer;