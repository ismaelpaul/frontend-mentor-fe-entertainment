import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Recommended from '../../components/Recommended/Recommended';
import SearchBar from '../../components/SearchBar/SearchBar';
import Trending from '../../components/Trending/Trending';
import { getEntertainments } from '../../redux/features/entertainment/entertainmentSlice';
import { AppDispatch } from '../../redux/store';

const Home = () => {
	const placeholder: string = 'Search for movies or TV series';

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getEntertainments());
	}, []);

	return (
		<>
			<SearchBar placeholder={placeholder} />
			<Trending />
			<Recommended />
		</>
	);
};

export default Home;
