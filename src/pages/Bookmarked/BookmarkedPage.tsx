import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Bookmarked from '../../components/Bookmarked/Bookmarked';
import SearchBar from '../../components/SearchBar/SearchBar';
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser';
import { getBookmarkeds } from '../../redux/features/entertainment/entertainmentSlice';
import { AppDispatch } from '../../redux/store';

const BookmarkedPage = () => {
	useRedirectLoggedOutUser('/login');

	const placeholder: string = 'Search for bookmarked shows';

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getBookmarkeds());
	}, []);

	return (
		<>
			<SearchBar placeholder={placeholder} />
			<Bookmarked />
		</>
	);
};

export default BookmarkedPage;
