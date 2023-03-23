import { useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { NewBookmark } from '../../redux/features/entertainment/entertainmentSlice';
import {
	selectFilteredBookmarks,
	selectFilteredEntertainments,
	selectFilteredMovies,
	selectFilteredTvSeries,
} from '../../redux/features/entertainment/filterSlice';
import { RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import '../../styles/cards.scss';
import BookmarkedIcon from '../BookmarkIcon/BookmarkedIcon';

const FilteredCards = () => {
	const filteredEntertainments = useSelector(selectFilteredEntertainments);
	const filteredMovies = useSelector(selectFilteredMovies);
	const filteredTvSeries = useSelector(selectFilteredTvSeries);
	const filteredBookmarks = useSelector(selectFilteredBookmarks);

	const bookmarkeds = useSelector(
		(state: RootState) => state.entertainments.bookmarkeds
	);

	const path = window.location.pathname;

	const checkBookmark = (
		entertainment: Entertainment,
		bookmarkeds: NewBookmark[]
	) => {
		const bookmarked = bookmarkeds.find(
			(bookmarked) => bookmarked.title === entertainment.title
		);

		if (bookmarked) {
			return <BookmarkedIcon id={bookmarked._id ?? ''} />;
		}
		return <BookmarkIcon id={entertainment._id} />;
	};

	return (
		<div className="infoContainer">
			{path === '/movies'
				? filteredMovies.map((movie: Entertainment, index) => {
						return (
							<Card cardClass="movies" key={index}>
								<>{checkBookmark(movie, bookmarkeds)}</>

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
								<>{checkBookmark(tv, bookmarkeds)}</>

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
								<>{checkBookmark(entertainment, bookmarkeds)}</>
								<img src={entertainment.thumbnail.regular.small} />
								<div className="infoWrapper">
									<div className="info">
										<p>{entertainment.year}</p>
										<span>•</span>

										{entertainment.category === 'Movie' ? (
											<span>{moviesIcon} </span>
										) : (
											<span>{tvSeriesIcon} </span>
										)}

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
			{path === '/bookmarked'
				? filteredBookmarks.map((bookmark: Entertainment, index) => {
						return (
							<Card cardClass="tv-series" key={index}>
								<>{checkBookmark(bookmark, bookmarkeds)}</>
								<img src={bookmark.thumbnail.regular.small} />
								<div className="infoWrapper">
									<div className="info">
										<p>{bookmark.year}</p>
										<span>•</span>

										{bookmark.category === 'Movie' ? (
											<span>{moviesIcon} </span>
										) : (
											<span>{tvSeriesIcon} </span>
										)}

										<p>{bookmark.category}</p>
										<span>•</span>
										<p>{bookmark.rating}</p>
									</div>
									<div className="title">
										<p>{bookmark.title}</p>
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
