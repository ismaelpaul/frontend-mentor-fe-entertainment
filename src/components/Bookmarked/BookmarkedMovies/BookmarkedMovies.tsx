import styles from '../../Bookmarked/Bookmarked.module.scss';
import BookmarkedMovieCards from './BookmarkedMovieCards';

const BookmarkedMovies = () => {
	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Movies</h1>

			<div>
				<BookmarkedMovieCards />
			</div>
		</section>
	);
};

export default BookmarkedMovies;
