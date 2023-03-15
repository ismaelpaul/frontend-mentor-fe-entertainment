import { useSelector } from 'react-redux';
import {
	selectFilteredBookmarks,
	selectFilteredEntertainments,
	selectFilteredMovies,
	selectFilteredTvSeries,
} from '../../redux/features/entertainment/filterSlice';
import FilteredCards from './FilteredCards';
import styles from './FilteredEntertainments.module.scss';

type FilteredEntertainments = {
	search: string;
};

const FilteredEntertainments = ({ search }: FilteredEntertainments) => {
	const filteredEntertainments = useSelector(selectFilteredEntertainments);
	const filteredMovies = useSelector(selectFilteredMovies);
	const filteredTvSeries = useSelector(selectFilteredTvSeries);
	const filteredBookmarks = useSelector(selectFilteredBookmarks);

	const filteredEntertainmentsLength: number = filteredEntertainments.length;
	const filteredMoviesLength: number = filteredMovies.length;
	const filteredTvSeriesLength: number = filteredTvSeries.length;
	const filteredBookmarksLength: number = filteredBookmarks.length;

	const path = window.location.pathname;

	const checkResults = () => {
		if (path === '/movies') {
			if (filteredMoviesLength === 1) {
				return (
					<h1>
						Found 1 result for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			} else {
				return (
					<h1>
						Found {filteredMovies.length} results for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			}
		} else if (path === '/tv-series') {
			if (filteredTvSeriesLength === 1) {
				return (
					<h1>
						Found 1 result for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			} else {
				return (
					<h1>
						Found {filteredTvSeries.length} results for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			}
		} else if (path === '/') {
			if (filteredEntertainmentsLength === 1) {
				return (
					<h1>
						Found 1 result for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			} else {
				return (
					<h1>
						Found {filteredEntertainments.length} results for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			}
		} else if (path === '/bookmarked') {
			if (filteredBookmarksLength === 1) {
				return (
					<h1>
						Found 1 result for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			} else {
				return (
					<h1>
						Found {filteredBookmarks.length} results for '
						{search.charAt(0).toUpperCase() + search.slice(1)}'
					</h1>
				);
			}
		}
	};

	return (
		<section className={styles.filtered}>
			{checkResults()}
			<FilteredCards />
		</section>
	);
};

export default FilteredEntertainments;
