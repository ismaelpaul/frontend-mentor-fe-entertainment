import { ReactNode } from 'react';
import '../../styles/cards.scss';

type CardProps = {
	children: ReactNode;
	cardClass: string;
};

const Card = ({ children, cardClass }: CardProps) => {
	return <div className={`card ${cardClass}`}>{children}</div>;
};

export default Card;
