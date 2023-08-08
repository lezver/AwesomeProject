import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: null,
	email: null,
	password: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	// extraReducers: () => {},
	reducers: {
		updateUser: (state, actions) => {
			// state.userId = actions.payload.userId;
			state.login = actions.payload.login;
			state.email = actions.payload.email;
		},
		authStateChange: (state, { payload }) => {
			state.stateChange = payload.stateChange;
		},
		// authSignOut: () => initialState,
	},
});
