import '../../styles/cards.scss';

type CardProps = {
	children: JSX.Element | JSX.Element[];
	cardClass: string;
};

const Card = ({ children, cardClass }: CardProps) => {
	return <article className={`card ${cardClass}`}>{children}</article>;
};

export default Card;
