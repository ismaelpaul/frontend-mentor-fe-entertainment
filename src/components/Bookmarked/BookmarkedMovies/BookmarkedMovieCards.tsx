import { useSelector } from 'react-redux';
import { moviesIcon, tvSeriesIcon } from '../../../data/icons';
import { RootState } from '../../../redux/store';
import Card from '../../Card/Card';
import '../../../styles/cards.scss';
import { useState } from 'react';
import PlayIcon from '../../PlayIcon/PlayIcon';
import BookmarkedIcon from '../../BookmarkIcon/BookmarkedIcon';

const BookmarkedMovieCards = () => {
	const [isHovering, setIsHovering] = useState(-1);

	const bookmarkeds = useSelector(
		(state: RootState) => state.entertainments.bookmarkeds
	);

	const handleMouseOver = (index: number) => {
		setIsHovering(index);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
	};

	return (
		<article className="infoContainer">
			{bookmarkeds.map((bookmark, index: number) => {
				if (bookmark.category === 'Movie') {
					return (
						<Card cardClass="movies" key={index}>
							<BookmarkedIcon id={bookmark._id} />

							<span
								onMouseOut={handleMouseOut}
								className={
									isHovering === index ? 'playIconOnHover' : 'playIcon'
								}
							>
								<span
									id="bookmarked"
									className="playIconOverlay"
									onMouseOver={() => {
										handleMouseOver(index);
									}}
								>
									<PlayIcon />
								</span>
							</span>

							<img
								id="bookmarked"
								src={bookmark.thumbnail?.regular.small}
								onMouseOver={() => {
									handleMouseOver(index);
								}}
							/>
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
				}
			})}
		</article>
	);
};

export default BookmarkedMovieCards;
