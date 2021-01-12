import React from 'react';
import './card.css';

const Card = props => {
    return(
        <div className="card-container">
            <h3>{props.monster.name}</h3>
        </div>
    )
}

export default Card;