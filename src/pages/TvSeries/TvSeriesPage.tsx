import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilteredEntertainments from '../../components/FilteredEntertainments/FilteredEntertainments';
import SearchBar from '../../components/SearchBar/SearchBar';
import TvSeries from '../../components/TvSeries/TvSeries';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { FILTER_TV_SERIES } from '../../redux/features/entertainment/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';

const TvSeriesPage = () => {
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for TV Series';

	const dispatch = useDispatch<AppDispatch>();

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	useEffect(() => {
		dispatch(FILTER_TV_SERIES({ entertainments, search }));
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
					<TvSeries />
				</>
			)}
		</>
	);
};

export default TvSeriesPage;
