import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import RecommendedCards from './RecommendedCards';
import styles from './Recommended.module.scss';

const Recommended = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);
	return (
		<section className={styles.recommended}>
			<h1>Recommended for you</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<RecommendedCards />
				</div>
			)}
		</section>
	);
};

export default Recommended;
