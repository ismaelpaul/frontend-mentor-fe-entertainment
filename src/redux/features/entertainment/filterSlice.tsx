import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
	filter: {
		filteredEntertainments: [];
		filteredMovies: [];
		filteredTvSeries: [];
	};
}
{
}
const initialState = {
	filteredEntertainments: [],
	filteredMovies: [],
	filteredTvSeries: [],
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		FILTER_ENTERTAINMENTS(state, action) {
			const { entertainments, search } = action.payload;

			const tempEntertainments = entertainments.filter((entertainment) => {
				return entertainment.title.toLowerCase().includes(search.toLowerCase());
			});
			state.filteredEntertainments = tempEntertainments;
		},
		FILTER_MOVIES(state, action) {
			const { entertainments, search } = action.payload;

			const tempMovies = entertainments.filter((entertainment) => {
				if (entertainment.category === 'Movie') {
					return entertainment.title
						.toLowerCase()
						.includes(search.toLowerCase());
				}
			});
			state.filteredMovies = tempMovies;
		},
		FILTER_TV_SERIES(state, action) {
			const { entertainments, search } = action.payload;

			const tempTvSeries = entertainments.filter((entertainment) => {
				if (entertainment.category === 'TV Series') {
					return entertainment.title
						.toLowerCase()
						.includes(search.toLowerCase());
				}
			});
			state.filteredTvSeries = tempTvSeries;
		},
	},
});

export const { FILTER_ENTERTAINMENTS, FILTER_MOVIES, FILTER_TV_SERIES } =
	filterSlice.actions;

export const selectFilteredEntertainments = (state: InitialState) =>
	state.filter.filteredEntertainments;

export const selectFilteredMovies = (state: InitialState) =>
	state.filter.filteredMovies;

export const selectFilteredTvSeries = (state: InitialState) =>
	state.filter.filteredTvSeries;

export default filterSlice.reducer;
