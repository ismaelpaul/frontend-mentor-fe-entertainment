import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Card from '../Card/Card';
import BookmarkIcon from '../BookmarkIcon/BookmarkIcon';
import { moviesIcon, tvSeriesIcon } from '../../data/icons';
import styles from './Trending.module.scss';
import { FC } from 'react';
import {
	addNewBookmark,
	getEntertainment,
	NewBookmark,
} from '../../redux/features/entertainment/entertainmentSlice';

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
							<img src={entertainment.thumbnail.regular.small} />
						</Card>
					);
				}
			})}
		</div>
	);
};

export default TrendingCards;
