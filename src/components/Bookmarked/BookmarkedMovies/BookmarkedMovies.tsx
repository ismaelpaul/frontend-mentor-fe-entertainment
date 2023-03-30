import styles from '../../Bookmarked/Bookmarked.module.scss';
import BookmarkedMovieCards from './BookmarkedMovieCards';

const BookmarkedMovies = () => {
	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Movies</h1>

			<BookmarkedMovieCards />
		</section>
	);
};

export default BookmarkedMovies;
