import "bulma/css/bulma.css"
// import "./css/Card.css";

function Card({ imageUrl, heading, description }){
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageUrl} alt="Card" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{heading}</p>
                    <p className="content">{description}</p>
                </div>
            </div>
        </div>

        // <div className="card">
        //     <img className="card-image" src={imageUrl} alt="Card" />
        //     <div className="card-content">
        //         <h2 className="card-heading">{heading}</h2>
        //         <p className="card-description">{description}</p>
        //     </div>
        // </div>
    );
}

export default Card;