import { useDispatch, useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { AppDispatch, RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import {
	getBookmarkeds,
	NewBookmark,
} from '../../redux/features/entertainment/entertainmentSlice';
import PlayIcon from '../PlayIcon/PlayIcon';
import { useEffect, useState } from 'react';
import BookmarkedIcon from '../BookmarkIcon/BookmarkedIcon';
import '../../styles/cards.scss';

const RecommendedCards = () => {
	const [isHovering, setIsHovering] = useState(-1);

	const dispatch = useDispatch<AppDispatch>();

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

	useEffect(() => {
		dispatch(getBookmarkeds());
	}, []);

	return (
		<article className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (!entertainment.isTrending) {
					return (
						<Card cardClass="recommended" key={index}>
							<>{checkBookmark(entertainment, bookmarkeds)}</>

							<span
								id="recommended"
								onMouseOut={handleMouseOut}
								className={
									isHovering === index ? 'playIconOnHover' : 'playIcon'
								}
							>
								<span
									id="recommended"
									className="playIconOverlay"
									onMouseOver={() => {
										handleMouseOver(index);
									}}
								>
									<PlayIcon />
								</span>
							</span>
							<img
								id="recommended"
								src={entertainment.thumbnail.regular.small}
								onMouseOver={() => {
									handleMouseOver(index);
								}}
							/>
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
		</article>
	);
};

export default RecommendedCards;
