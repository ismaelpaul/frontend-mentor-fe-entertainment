import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TvSeriesCards from './TvSeriesCards';
import styles from './TvSeries.module.scss';

const TvSeries = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);
	return (
		<section className={styles.tvSeries}>
			<h1>TV Series</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<TvSeriesCards />
				</div>
			)}
		</section>
	);
};

export default TvSeries;
