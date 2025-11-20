// Card.jsx
const Card = ({ cardTitle, cardImage, cardDescription, cardAction }) => {
    return (
        <div className="card">
            {cardImage && <img className="card__image" src={cardImage} alt={cardTitle} />}
            <div className="card__content">
                <h3>{cardTitle}</h3>
                <p>{cardDescription}</p>
                <button>{cardAction}</button>
            </div>
        </div>
    );
};

export default Card;
