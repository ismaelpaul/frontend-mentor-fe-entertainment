import MoviesCards from './MoviesCards';
import styles from './Movies.module.scss';

const Movies = () => {
	return (
		<section className={styles.movies}>
			<h1>Movies</h1>

			<MoviesCards />
		</section>
	);
};

export default Movies;
