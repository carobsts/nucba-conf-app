import React from 'react';

const BeerButton = ({ handleClick }) => {
    return (
        <div>
            <button 
            onClick={ () => handleClick() }
            />
        </div>
    )
}

export default BeerButton;