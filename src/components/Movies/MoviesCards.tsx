import { useDispatch, useSelector } from 'react-redux';
import { moviesIcon } from '../../data/icons';
import { AppDispatch, RootState } from '../../redux/store';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import Card from '../Card/Card';
import { Entertainment } from '../Trending/TrendingCards';
import '../../styles/cards.scss';
import { useState } from 'react';
import PlayIcon from '../PlayIcon/PlayIcon';
import {
	addNewBookmark,
	getEntertainment,
} from '../../redux/features/entertainment/entertainmentSlice';

const MoviesCards = () => {
	const [isHovering, setIsHovering] = useState(-1);

	const dispatch = useDispatch<AppDispatch>();

	const { entertainments } = useSelector(
		(state: RootState) => state.entertainments
	);

	const handleBookmarking = async (id: string) => {
		const newBookmark = await dispatch(getEntertainment(id));

		dispatch(addNewBookmark(newBookmark.payload));
	};

	const handleMouseOver = (index: number) => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
	};

	return (
		<div className="infoContainer">
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.category === 'Movie') {
					return (
						<Card cardClass="movies" key={index}>
							<button
								type="button"
								className="bookmarkIcon"
								onClick={() => {
									handleBookmarking(entertainment._id);
								}}
							>
								<BookmarkIcon />
							</button>

							<span
								onMouseOut={handleMouseOut}
								className={
									isHovering === index ? 'playIconOnHover' : 'playIcon'
								}
							>
								<span
									id="movies"
									className="playIconOverlay"
									onMouseOver={() => {
										handleMouseOver(index);
									}}
								>
									<PlayIcon />
								</span>
							</span>

							<img
								id="movies"
								src={entertainment.thumbnail.regular.small}
								onMouseOver={() => {
									handleMouseOver(index);
								}}
							/>
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
