import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import { tvSeriesIcon } from '../../data/icons';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import '../../styles/cards.scss';
import { useState } from 'react';
import PlayIcon from '../PlayIcon/PlayIcon';
import { NewBookmark } from '../../redux/features/entertainment/entertainmentSlice';
import BookmarkedIcon from '../BookmarkIcon/BookmarkedIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TvSeriesCards = () => {
	const [isHovering, setIsHovering] = useState(-1);

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	const bookmarkeds = useSelector(
		(state: RootState) => state.entertainments.bookmarkeds
	);

	const handleMouseOver = (index: number) => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
	};

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
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.category === 'TV Series') {
					return (
						<Card cardClass="tv-series" key={index}>
							<>{checkBookmark(entertainment, bookmarkeds)}</>
							<span
								onMouseOut={handleMouseOut}
								className={
									isHovering === index ? 'playIconOnHover' : 'playIcon'
								}
							>
								<span
									id="tv-series"
									className="playIconOverlay"
									onMouseOver={() => {
										handleMouseOver(index);
									}}
								>
									<PlayIcon />
								</span>
							</span>

							<img
								id="tv-series"
								src={entertainment.thumbnail.regular.small}
								onMouseOver={() => {
									handleMouseOver(index);
								}}
							/>
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
