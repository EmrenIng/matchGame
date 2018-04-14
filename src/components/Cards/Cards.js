import React from "react";
import "./Cards.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectCake(props.type)} >
                <img alt={props.type} src={props.image} />
            </a>
        </div>
    </div>
);

export default Card;
