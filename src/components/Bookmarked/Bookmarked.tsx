import styles from './Bookmarked.module.scss';
import BookmarkedCards from './BookmarkedCards';

const Bookmarked = () => {
	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Movies</h1>

			<div>
				<BookmarkedCards />
			</div>
		</section>
	);
};

export default Bookmarked;
