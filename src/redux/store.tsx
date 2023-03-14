import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import entertainmentReducer from './features/entertainment/entertainmentSlice';
import filterReducer from './features/entertainment/filterSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		entertainments: entertainmentReducer,
		filter: filterReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
