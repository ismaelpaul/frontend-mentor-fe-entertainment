import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import { tvSeriesIcon } from '../../data/icons';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import '../../styles/cards.scss';
import { MouseEvent, SyntheticEvent, useState } from 'react';
import PlayIcon from '../PlayIcon/PlayIcon';
import {
	addNewBookmark,
	getEntertainment,
} from '../../redux/features/entertainment/entertainmentSlice';

const TvSeriesCards = () => {
	const [isHovering, setIsHovering] = useState(-1);
	const [elementHovered, setElementHovered] = useState('');

	const dispatch = useDispatch<AppDispatch>();

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	const handleBookmarking = async (e: SyntheticEvent, id: string) => {
		e.preventDefault();

		const newBookmark = await dispatch(getEntertainment(id));

		dispatch(addNewBookmark(newBookmark.payload));
	};

	const handleMouseOver = (e: MouseEvent<HTMLSpanElement>, index: number) => {
		const target = e.target as HTMLSpanElement;
		setIsHovering(index);
		setElementHovered(target.id);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
		setElementHovered('');
	};

	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.category === 'TV Series') {
					return (
						<Card cardClass="tv-series" key={index}>
							<span
								className="bookmarkIcon"
								onClick={(e) => {
									handleBookmarking(e, entertainment._id);
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
									id="tv-series"
									className="playIconOverlay"
									onMouseOver={(e) => {
										handleMouseOver(e, index);
									}}
								>
									<PlayIcon elementHovered={elementHovered} />
								</span>
							</span>

							<img
								id="tv-series"
								src={entertainment.thumbnail.regular.small}
								onMouseOver={(e) => {
									handleMouseOver(e, index);
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
