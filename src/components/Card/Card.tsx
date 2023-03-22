import '../../styles/cards.scss';

type CardProps = {
	children: JSX.Element | JSX.Element[];
	cardClass: string;
};

const Card = ({ children, cardClass }: CardProps) => {
	return <div className={`card ${cardClass}`}>{children}</div>;
};

export default Card;
