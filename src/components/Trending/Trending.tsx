import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import TrendingCards from './TrendingCards';
import styles from './Trending.module.scss';

const Trending = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);

	return (
		<section className={styles.trending}>
			<h1>Trending</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className={styles.trendingContainer}>
					<TrendingCards />
				</div>
			)}
		</section>
	);
};

export default Trending;
