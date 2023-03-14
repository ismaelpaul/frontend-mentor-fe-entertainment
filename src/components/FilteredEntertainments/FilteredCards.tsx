import { useDispatch, useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import {
	addNewBookmark,
	getEntertainment,
	NewBookmark,
} from '../../redux/features/entertainment/entertainmentSlice';
import {
	selectFilteredEntertainments,
	selectFilteredMovies,
	selectFilteredTvSeries,
} from '../../redux/features/entertainment/filterSlice';
import { AppDispatch, RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import '../../styles/cards.scss';

const FilteredCards = () => {
	const filteredEntertainments = useSelector(selectFilteredEntertainments);

	const filteredMovies = useSelector(selectFilteredMovies);
	const filteredTvSeries = useSelector(selectFilteredTvSeries);

	const dispatch = useDispatch<AppDispatch>();

	const newBookmark = useSelector(
		(state: RootState) => state.entertainments.singleEntertainment
	);

	const handleBookmarking = async (id: string, newBookmark: NewBookmark) => {
		await dispatch(getEntertainment(id));
		await dispatch(addNewBookmark(newBookmark));
	};

	const path = window.location.pathname;

	return (
		<div className="infoContainer">
			{path === '/movies'
				? filteredMovies.map((movie: Entertainment, index) => {
						return (
							<Card cardClass="movies" key={index}>
								<span
									className="bookmarkIcon"
									onClick={() => {
										handleBookmarking(movie._id, newBookmark);
									}}
								>
									<BookmarkIcon />
								</span>
								<img src={movie.thumbnail.regular.small} />
								<div className="infoWrapper">
									<div className="info">
										<p>{movie.year}</p>
										<span>•</span>

										<span>{moviesIcon} </span>

										<p>{movie.category}</p>
										<span>•</span>
										<p>{movie.rating}</p>
									</div>
									<div className="title">
										<p>{movie.title}</p>
									</div>
								</div>
							</Card>
						);
				  })
				: null}
			{path === '/tv-series'
				? filteredTvSeries.map((tv: Entertainment, index) => {
						return (
							<Card cardClass="tv-series" key={index}>
								<span
									className="bookmarkIcon"
									onClick={() => {
										handleBookmarking(tv._id, newBookmark);
									}}
								>
									<BookmarkIcon />t
								</span>
								<img src={tv.thumbnail.regular.small} />
								<div className="infoWrapper">
									<div className="info">
										<p>{tv.year}</p>
										<span>•</span>

										<span>{tvSeriesIcon} </span>

										<p>{tv.category}</p>
										<span>•</span>
										<p>{tv.rating}</p>
									</div>
									<div className="title">
										<p>{tv.title}</p>
									</div>
								</div>
							</Card>
						);
				  })
				: null}
			{path === '/'
				? filteredEntertainments.map((entertainment: Entertainment, index) => {
						return (
							<Card cardClass="tv-series" key={index}>
								<span
									className="bookmarkIcon"
									onClick={() => {
										handleBookmarking(entertainment._id, newBookmark);
									}}
								>
									<BookmarkIcon />
								</span>
								<img src={entertainment.thumbnail.regular.small} />
								<div className="infoWrapper">
									<div className="info">
										<p>{entertainment.year}</p>
										<span>•</span>

										<span>{tvSeriesIcon} </span>

										<p>{entertainment.category}</p>
										<span>•</span>
										<p>{entertainment.rating}</p>
									</div>
									<div className="title">
										<p>{entertainment.title}</p>
									</div>
								</div>
							</Card>
						);
				  })
				: null}
		</div>
	);
};

export default FilteredCards;
