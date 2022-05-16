import "./cards.css";

function Cards(props) {
    return (
        <div className="card-container">
            <img src={props.srcImg} alt="Sorry" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="links">
                <a href={props.hrefShare}>SHARE</a>
                <a href={props.hrefExplore}>EXPLORE</a>
            </div>
        </div>
    );
}

export default Cards;