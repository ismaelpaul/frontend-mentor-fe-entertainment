import { ReactNode } from 'react';
import nav from '../../data/nav';
import { NavItems } from './NavItems';
import profileImage from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import styles from './Nav.module.scss';

type NavProps = {
	children: ReactNode;
};

const Nav = ({ children }: NavProps) => {
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
				<div className={styles.imageCropper}>
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
