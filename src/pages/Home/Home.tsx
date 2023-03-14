import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilteredEntertainments from '../../components/FilteredEntertainments/FilteredEntertainments';
import Recommended from '../../components/Recommended/Recommended';
import SearchBar from '../../components/SearchBar/SearchBar';
import Trending from '../../components/Trending/Trending';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { getEntertainments } from '../../redux/features/entertainment/entertainmentSlice';
import { FILTER_ENTERTAINMENTS } from '../../redux/features/entertainment/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';

const Home = () => {
	const [search, setSearch] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for movies or TV series';

	const dispatch = useDispatch<AppDispatch>();

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		dispatch(getEntertainments());
	}, []);

	useEffect(() => {
		dispatch(FILTER_ENTERTAINMENTS({ entertainments, search }));
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
					<Trending />
					<Recommended />
				</>
			)}
		</>
	);
};

export default Home;
