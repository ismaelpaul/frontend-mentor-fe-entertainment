import { AxiosError } from 'axios';
import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { SET_LOGIN } from '../../redux/features/auth/authSlice';
import '../../styles/buttons.scss';
import { loginUser } from '../../utils/api';
import styles from './Auth.module.scss';

const Login = () => {
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { email, password } = formData;

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		setIsError(false);
		setErrorMessage('');
	};

	const login: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();

		if (!email || !password) {
			setIsError(true);
		}

		const userData = { email, password };

		setIsLoading(true);

		try {
			await loginUser(userData);
			dispatch(SET_LOGIN(true));
			navigate('/');
			setIsLoading(false);
		} catch (error) {
			if (error instanceof AxiosError) {
				setErrorMessage(error.response?.data.message);
			}
		}
	};

	return (
		<div className={styles.auth}>
			<svg width="32" height="25.6" xmlns="http://www.w3.org/2000/svg">
				<path
					d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
					fill="#FC4747"
				/>
			</svg>
			<Card cardClass="auth-content">
				<h1>Login</h1>
				<form onSubmit={login}>
					<div className="inputContainer">
						<input
							type="email"
							name="email"
							placeholder="Email address"
							value={email}
							onChange={handleInputChange}
						></input>
						{isError ? (
							<span className="errorMessage">{errorMessage}</span>
						) : null}
					</div>
					<div className="inputContainer">
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={handleInputChange}
						></input>
						{isError ? (
							<span className="errorMessage">{errorMessage}</span>
						) : null}
					</div>
					<button className="primary-button" type="submit">
						Login to your account
					</button>
				</form>
				<p>
					Don't have an account?{' '}
					<Link to="/signup">
						<span>Sign up</span>
					</Link>{' '}
				</p>
			</Card>
		</div>
	);
};

export default Login;
