import { NavLink } from 'react-router-dom';
import styles from './Nav.module.scss';

interface Item {
	item: {
		title: string;
		path: string;
		icon: JSX.Element;
	};
}

export const NavItems = ({ item }: Item) => {
	const activeSublink = ({ isActive }: any) =>
		isActive ? `${styles.iconActive}` : `${styles.icon}`;

	return (
		<NavLink className={activeSublink} to={item.path}>
			{item.icon && (
				<>{item.icon}</>
				// <img
				// 	className={styles.icon}
				// 	src={item.icon}
				// 	alt={item.title + ' icon'}
				// />
			)}
		</NavLink>
	);
};
