import { useDispatch } from 'react-redux';
import {
	addNewBookmark,
	getEntertainment,
} from '../../redux/features/entertainment/entertainmentSlice';
import { AppDispatch } from '../../redux/store';
import styles from './BookmarkIcon.module.scss';

const bookmarkIcon = (
	<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
		<path
			d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
			stroke="#FFF"
			strokeWidth="1.5"
			fill="none"
		/>
	</svg>
);
type IconProps = {
	id: string;
};

const BookmarkIcon = ({ id }: IconProps) => {
	const dispatch = useDispatch<AppDispatch>();

	const handleBookmarking = async (id: string) => {
		const newBookmark = await dispatch(getEntertainment(id));

		dispatch(addNewBookmark(newBookmark.payload));
	};
	return (
		<div className={styles.bookmarkIcon}>
			<button
				className={styles.iconBackground}
				onClick={() => {
					handleBookmarking(id);
				}}
			>
				{bookmarkIcon}
			</button>
		</div>
	);
};

export default BookmarkIcon;
