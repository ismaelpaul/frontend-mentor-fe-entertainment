import { useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import '../../styles/cards.scss';
import { Entertainment } from '../Trending/TrendingCards';

const RecommendedCards = () => {
	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (!entertainment.isTrending) {
					return (
						<Card cardClass="recommended" key={index}>
							<span className="bookmarkIcon">
								<BookmarkIcon />
							</span>
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
				}
			})}
		</div>
	);
};

export default RecommendedCards;
