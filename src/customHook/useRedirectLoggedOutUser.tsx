import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SET_LOGIN } from '../redux/features/auth/authSlice';
import { getLoginStatus } from '../utils/api';

const useRedirectLoggedOutUser = (path: string) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		const redirectLoggedOutUser = async () => {
			const isLoggedIn = await getLoginStatus();
			dispatch(SET_LOGIN(isLoggedIn));

			if (!isLoggedIn) {
				navigate(path);
				return;
			}
		};
		redirectLoggedOutUser();
	}, []);
};

export default useRedirectLoggedOutUser;
