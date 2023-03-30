import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Card from '../Card/Card';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import { FC, useState } from 'react';
import { NewBookmark } from '../../redux/features/entertainment/entertainmentSlice';

import styles from './Trending.module.scss';
import PlayIconTrending from '../PlayIcon/PlayIconTrending';
import BookmarkedIcon from '../BookmarkIcon/BookmarkedIcon';

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
		<article className={styles.infoContainer}>
			{entertainments.map((entertainment: Entertainment, index) => {
				if (entertainment.isTrending) {
					return (
						<Card cardClass="trending" key={index}>
							<>{checkBookmark(entertainment, bookmarkeds)}</>

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
		</article>
	);
};

export default TrendingCards;
