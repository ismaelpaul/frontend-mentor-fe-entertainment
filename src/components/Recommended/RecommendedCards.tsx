import { useDispatch, useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { AppDispatch, RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import '../../styles/cards.scss';
import { Entertainment } from '../Trending/TrendingCards';
import {
	addNewBookmark,
	getEntertainment,
	NewBookmark,
} from '../../redux/features/entertainment/entertainmentSlice';
import PlayIcon from '../PlayIcon/PlayIcon';
import { ChangeEvent, MouseEvent, useState } from 'react';

const RecommendedCards = () => {
	const [isHovering, setIsHovering] = useState(-1);

	const dispatch = useDispatch<AppDispatch>();

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	const newBookmark = useSelector(
		(state: RootState) => state.entertainments.singleEntertainment
	);

	const handleBookmarking = async (id: string, newBookmark: NewBookmark) => {
		await dispatch(getEntertainment(id));
		await dispatch(addNewBookmark(newBookmark));
	};

	const handleMouseOver = (e: MouseEvent<HTMLSpanElement>, index: number) => {
		e.stopPropagation();
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
	};
	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (!entertainment.isTrending) {
					return (
						<Card cardClass="recommended" key={index}>
							<span
								className="bookmarkIcon"
								onClick={() => {
									handleBookmarking(entertainment._id, newBookmark);
								}}
							>
								<BookmarkIcon />
							</span>

							<span
								onMouseOut={handleMouseOut}
								className={
									isHovering === index ? 'playIconOnHover' : 'playIcon'
								}
							>
								<span
									onMouseOver={(e) => {
										handleMouseOver(e, index);
									}}
								>
									<PlayIcon />
								</span>
							</span>

							<img
								src={entertainment.thumbnail.regular.small}
								onMouseOver={(e) => {
									handleMouseOver(e, index);
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
		</div>
	);
};

export default RecommendedCards;
