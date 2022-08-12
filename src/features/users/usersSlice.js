import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dude Lobowski" },
  { id: "1", name: "Neil Young" },
  { id: "2", name: "Dave Grey" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selecteAllUsers = (state) => state.users;

export default usersSlice.reducer;
