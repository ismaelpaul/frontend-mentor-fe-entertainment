import { ReactNode } from 'react';
import nav from '../../data/nav';
import { NavItems } from './NavItems';
import profileImage from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import styles from './Nav.module.scss';
import { logoutUser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_LOGIN } from '../../redux/features/auth/authSlice';

type NavProps = {
	children: ReactNode;
};

const Nav = ({ children }: NavProps) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logoutUser();
		dispatch(SET_LOGIN(false));
		navigate('/login');
	};
	return (
		<div className={styles.container}>
			<div className={styles.navContainer}>
				<div className={styles.logo}>
					<img src={logo} alt="Logo" />
				</div>
				<nav className={styles.navItems}>
					{nav.map((item, index) => {
						return <NavItems key={index} item={item} />;
					})}
				</nav>
				<div className={styles.imageCropper} onClick={handleLogout}>
					<img
						src={profileImage}
						alt="Rounded image representing the profile picture of the user"
					/>
				</div>
			</div>
			<main>{children}</main>
		</div>
	);
};

export default Nav;
