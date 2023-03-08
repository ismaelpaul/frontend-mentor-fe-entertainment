import { useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import '../../styles/cards.scss';

const BookmarkedCards = () => {
	const bookmarkeds = useSelector(
		(state: RootState) => state.entertainments.bookmarkeds
	);

	return (
		<div className="infoContainer">
			{bookmarkeds.map((bookmark: Entertainment, index: number) => {
				return (
					<Card cardClass="movies" key={index}>
						<span className="bookmarkIcon">
							<BookmarkIcon />
						</span>
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
			})}
		</div>
	);
};

export default BookmarkedCards;
