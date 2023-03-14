import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { FILTER_MOVIES } from '../../redux/features/entertainment/filterSlice';
import FilteredEntertainments from '../../components/FilteredEntertainments/FilteredEntertainments';

const MoviesPage = () => {
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for movies';

	const dispatch = useDispatch<AppDispatch>();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	useEffect(() => {
		dispatch(FILTER_MOVIES({ entertainments, search }));
		if (search !== '') {
			setIsSearching(true);
		} else {
			setIsSearching(false);
		}
	}, [entertainments, search]);

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
					<Movies />
				</>
			)}
		</>
	);
};

export default MoviesPage;
