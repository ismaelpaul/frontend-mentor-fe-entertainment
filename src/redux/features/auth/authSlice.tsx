import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
	isLoggedIn: boolean;
	user: {
		email: string;
		picture: string;
	};
};

const initialState: InitialStateType = {
	isLoggedIn: false,
	user: {
		email: '',
		picture: '',
	},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		SET_LOGIN(state, action) {
			state.isLoggedIn = action.payload;
		},
		SET_USER(state, action) {
			const profile = action.payload;
			state.user.email = profile.email;
			state.user.picture = profile.picture;
		},
	},
});

export const { SET_LOGIN, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state: { auth: InitialStateType }) =>
	state.auth.isLoggedIn;
export const selectUser = (state: { auth: InitialStateType }) =>
	state.auth.user;

export default authSlice.reducer;
