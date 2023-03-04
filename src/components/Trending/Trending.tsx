import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Trending.module.scss';
import TrendingInfo from './TrendingInfo';

const Trending = () => {
	const { isLoading } = useSelector((state: RootState) => state.entertainments);

	return (
		<section>
			<h1>Trending</h1>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					<TrendingInfo />
				</div>
			)}
		</section>
	);
};

export default Trending;
