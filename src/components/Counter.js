import React from 'react';

const Counter = (props) => {
    return (
        <div className="counter">
            <p>{props.name}</p>
            <h2>{props.number}</h2>
        </div>
    );
}

export default Counter;