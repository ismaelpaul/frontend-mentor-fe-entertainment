import styles from '../../Bookmarked/Bookmarked.module.scss';
import BookmarkedTvSeriesCards from './BookmarkedTvSeriesCards';

const BookmarkedTvSeries = () => {
	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Tv Series</h1>

			<BookmarkedTvSeriesCards />
		</section>
	);
};

export default BookmarkedTvSeries;
