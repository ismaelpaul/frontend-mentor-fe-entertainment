import SearchBar from '../../components/SearchBar/SearchBar';
import TvSeries from '../../components/TvSeries/TvSeries';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';

const TvSeriesPage = () => {
	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for TV Series';
	return (
		<>
			<SearchBar placeholder={placeholder} />
			<TvSeries />
		</>
	);
};

export default TvSeriesPage;
