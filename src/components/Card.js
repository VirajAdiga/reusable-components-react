import "./css/Card.css";

function Card({ imageUrl, heading, description }){
    return (
        <div className="card">
            <img className="card-image" src={imageUrl} alt="Card" />
            <div className="card-content">
                <h2 className="card-heading">{heading}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    );
}

export default Card;