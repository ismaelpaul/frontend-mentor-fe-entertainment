import styles from '../../Bookmarked/Bookmarked.module.scss';
import BookmarkedTvSeriesCards from './BookmarkedTvSeriesCards';

const BookmarkedTvSeries = () => {
	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Tv Series</h1>

			<div>
				<BookmarkedTvSeriesCards />
			</div>
		</section>
	);
};

export default BookmarkedTvSeries;
