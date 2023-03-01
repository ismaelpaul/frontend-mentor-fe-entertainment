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
			{item.icon && <span>{item.icon}</span>}
		</NavLink>
	);
};
