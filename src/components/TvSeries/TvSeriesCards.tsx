import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import { tvSeriesIcon } from '../../data/icons';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import '../../styles/cards.scss';

const TvSeriesCards = () => {
	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.category === 'TV Series') {
					return (
						<Card cardClass="tv-series" key={index}>
							<span className="bookmarkIcon">
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
				}
			})}
		</div>
	);
};

export default TvSeriesCards;
