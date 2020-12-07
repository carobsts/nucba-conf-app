import React from 'react';
import './styles.css';

const IconContainer = ({ img }) => {
    return (
        <div className="icon-container --img">
            <img src={img} alt="beer-img" />
        </div>
    )
}

export default IconContainer;