import { useSelector } from 'react-redux';
import { moviesIcon } from '../../data/icons';
import { RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import '../../styles/cards.scss';

const MoviesCards = () => {
	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.category === 'Movie') {
					return (
						<Card cardClass="movies" key={index}>
							<span className="bookmarkIcon">
								<BookmarkIcon />
							</span>
							<img src={entertainment.thumbnail.regular.small} />
							<div className="infoWrapper">
								<div className="info">
									<p>{entertainment.year}</p>
									<span>•</span>

									<span>{moviesIcon} </span>

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
				}
			})}
		</div>
	);
};

export default MoviesCards;
