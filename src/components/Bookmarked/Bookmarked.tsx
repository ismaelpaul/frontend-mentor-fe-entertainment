import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Bookmarked.module.scss';
import BookmarkedCards from './BookmarkedCards';

const Bookmarked = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);

	return (
		<section className={styles.bookmarked}>
			<h1>Bookmarked Movies</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<BookmarkedCards />
				</div>
			)}
		</section>
	);
};

export default Bookmarked;
