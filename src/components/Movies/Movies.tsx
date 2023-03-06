import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import MoviesCards from './MoviesCards';
import styles from './Movies.module.scss';

const Movies = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);
	return (
		<section className={styles.movies}>
			<h1>Movies</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<MoviesCards />
				</div>
			)}
		</section>
	);
};

export default Movies;
