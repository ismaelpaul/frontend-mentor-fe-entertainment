import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Card from '../Card/Card';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { FC, MouseEvent, useState } from 'react';
import {
	addNewBookmark,
	getEntertainment,
	NewBookmark,
} from '../../redux/features/entertainment/entertainmentSlice';
import PlayIcon from '../PlayIcon/PlayIcon';
import styles from './Trending.module.scss';

export type Entertainment = {
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
		trending: {
			large: string;
			small: string;
		};
	};
};

const TrendingCards: FC = () => {
	const [isHovering, setIsHovering] = useState(-1);
	const [elementHovered, setElementHovered] = useState('');

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
		const target = e.target as HTMLSpanElement;
		setIsHovering(index);
		setElementHovered(target.id);
	};

	const handleMouseOut = () => {
		setIsHovering(-1);
		setElementHovered('');
	};

	return (
		<div className={styles.infoContainer}>
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.isTrending) {
					return (
						<Card cardClass="trending" key={index}>
							<span
								className={styles.bookmarkIcon}
								onClick={() => {
									handleBookmarking(entertainment._id, newBookmark);
								}}
							>
								<BookmarkIcon />
							</span>
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
									id="trending"
									className={styles.playIconOverlay}
									onMouseOver={(e) => {
										handleMouseOver(e, index);
									}}
								>
									<PlayIcon elementHovered={elementHovered} />
								</span>
							</span>
							<img
								id="trending"
								src={entertainment.thumbnail.regular.large}
								onMouseOver={(e) => {
									handleMouseOver(e, index);
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
