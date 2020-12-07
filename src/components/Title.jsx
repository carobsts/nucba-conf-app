import React from 'react';
import './styles.css';

const Title = ({ title }) => {
    return (
        <div className="title-container">
            <h3> { title } </h3>
        </div>
    )
}

export default Title;