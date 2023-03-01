import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllEntertainments } from '../../../utils/api';

interface EntertainmentState {
	entertainments: [];
	bookmarked: [];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: unknown;
}
const initialState: EntertainmentState = {
	entertainments: [],
	bookmarked: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const getEntertainments = createAsyncThunk(
	'entertainments/getAll',
	async (_: void, thunkAPI) => {
		try {
			return await getAllEntertainments();
		} catch (error: any) {
			const message =
				(error.response && error.response.data && error.response.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

const entertainmentSlice = createSlice({
	name: 'entertainments',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getEntertainments.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getEntertainments.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.entertainments = action.payload;
			})
			.addCase(getEntertainments.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const {} = entertainmentSlice.actions;

export default entertainmentSlice.reducer;
