import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookmarkedMovies from '../../components/Bookmarked/BookmarkedMovies/BookmarkedMovies';
import BookmarkedTvSeries from '../../components/Bookmarked/BookmarkedTvSeries/BookmarkedTvSeries';
import FilteredEntertainments from '../../components/FilteredEntertainments/FilteredEntertainments';
import SearchBar from '../../components/SearchBar/SearchBar';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { getBookmarkeds } from '../../redux/features/entertainment/entertainmentSlice';
import { FILTER_BOOKMARKEDS } from '../../redux/features/entertainment/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';

const BookmarkedPage = () => {
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for bookmarked shows';

	const dispatch = useDispatch<AppDispatch>();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const bookmarkeds = useSelector(
		(state: RootState) => state.entertainments.bookmarkeds
	);

	useEffect(() => {
		dispatch(getBookmarkeds());
	}, []);

	useEffect(() => {
		dispatch(FILTER_BOOKMARKEDS({ bookmarkeds, search }));

		if (search !== '') {
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [bookmarkeds, search]);

	return (
		<>
			<SearchBar
				placeholder={placeholder}
				search={search}
				handleSearch={(e) => handleSearch(e)}
			/>
			{isSearching ? (
				<FilteredEntertainments search={search} />
			) : (
				<>
					<BookmarkedMovies />
					<BookmarkedTvSeries />
				</>
			)}
		</>
	);
};

export default BookmarkedPage;
