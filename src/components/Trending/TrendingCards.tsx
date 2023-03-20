import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Card from '../Card/Card';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { FC, useState } from 'react';
import {
	addNewBookmark,
	getEntertainment,
} from '../../redux/features/entertainment/entertainmentSlice';

import styles from './Trending.module.scss';
import PlayIconTrending from '../PlayIcon/PlayIconTrending';

export interface Entertainment {
	_id: string;
	title: string;
	category: string;
	isTrending: boolean;
	year: number;
	rating: string;
	thumbnail: {
		regular: {
			large: string;
			medium: string;
			small: string;
		};
		trending?: {
			large: string;
			small: string;
		};
	};
}

const TrendingCards: FC = () => {
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
		<div className={styles.infoContainer}>
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.isTrending) {
					return (
						<Card cardClass="trending" key={index}>
							<button
								type="button"
								className={styles.bookmarkIcon}
								onClick={() => {
									handleBookmarking(entertainment._id);
								}}
							>
								<BookmarkIcon />
							</button>
							<div className={styles.infoWrapper}>
								<div className={styles.info}>
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
								<div className={styles.title}>
									<p>{entertainment.title}</p>
								</div>
							</div>
							<span
								onMouseOut={handleMouseOut}
								className={
									isHovering === index
										? styles.playIconOnHover
										: styles.playIcon
								}
							>
								<span
									className={styles.playIconOverlay}
									onMouseOver={() => {
										handleMouseOver(index);
									}}
								>
									<PlayIconTrending />
								</span>
							</span>
							<img
								id="trending"
								src={entertainment.thumbnail.regular.large}
								onMouseOver={() => {
									handleMouseOver(index);
								}}
							/>
						</Card>
					);
				}
			})}
		</div>
	);
};

export default TrendingCards;
