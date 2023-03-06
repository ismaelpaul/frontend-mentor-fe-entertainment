import SearchBar from '../../components/SearchBar/SearchBar';
import TvSeries from '../../components/TvSeries/TvSeries';

const TvSeriesPage = () => {
	const placeholder: string = 'Search for TV Series';
	return (
		<>
			<SearchBar placeholder={placeholder} />
			<TvSeries />
		</>
	);
};

export default TvSeriesPage;
