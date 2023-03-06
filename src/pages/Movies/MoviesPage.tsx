import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';

const MoviesPage = () => {
	const placeholder: string = 'Search for movies';
	return (
		<>
			<SearchBar placeholder={placeholder} />
			<Movies />
		</>
	);
};

export default MoviesPage;
