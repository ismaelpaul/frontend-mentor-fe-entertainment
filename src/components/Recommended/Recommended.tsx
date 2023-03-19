import RecommendedCards from './RecommendedCards';
import styles from './Recommended.module.scss';

const Recommended = () => {
	return (
		<section className={styles.recommended}>
			<h1>Recommended for you</h1>
			<div>
				<RecommendedCards />
			</div>
		</section>
	);
};

export default Recommended;
