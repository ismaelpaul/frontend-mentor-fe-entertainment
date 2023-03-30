import TvSeriesCards from './TvSeriesCards';
import styles from './TvSeries.module.scss';

const TvSeries = () => {
	return (
		<section className={styles.tvSeries}>
			<h1>TV Series</h1>

			<TvSeriesCards />
		</section>
	);
};

export default TvSeries;
