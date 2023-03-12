import SearchBar from '../../components/SearchBar/SearchBar';
import Movies from '../../components/Movies/Movies';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';

const MoviesPage = () => {
	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for movies';
	return (
		<>
			<SearchBar placeholder={placeholder} />
			<Movies />
		</>
	);
};

export default MoviesPage;
