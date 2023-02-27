import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import '../../styles/buttons.scss';
import styles from './Auth.module.scss';

const Login = () => {
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
				<form>
					<input type="email" name="email" placeholder="Email address"></input>
					<input type="password" name="password" placeholder="Password"></input>
					<button className="primary-button" type="submit">
						Login to your account
					</button>
				</form>
				<p>
					Don't have an account?{' '}
					<Link to="/register">
						<span>Sign up</span>
					</Link>{' '}
				</p>
			</Card>
		</div>
	);
};

export default Login;
