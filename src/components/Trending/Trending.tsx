import TrendingCards from './TrendingCards';
import styles from './Trending.module.scss';

const Trending = () => {
	return (
		<section className={styles.trending}>
			<h1>Trending</h1>

			<div className={styles.trendingContainer}>
				<TrendingCards />
			</div>
		</section>
	);
};

export default Trending;
