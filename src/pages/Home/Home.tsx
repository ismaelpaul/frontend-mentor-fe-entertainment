import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
		</>
	);
};

export default Home;
