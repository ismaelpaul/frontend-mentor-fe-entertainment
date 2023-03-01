import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/features/auth/authSlice';
import entertainmentReducer from '../redux/features/entertainment/entertainmentSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		entertainments: entertainmentReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
