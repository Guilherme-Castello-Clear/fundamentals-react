import React from 'react';

export default props => {
    let result = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return (
        <div>
            <h2>Aletório</h2>
            <p>
                <strong>Minimo: </strong> {props.min}
            </p>
            <p>
                <strong>Máximo: </strong> {props.max}
            </p>
            <p>
                <strong>Escolhido: </strong> {result}
            </p>
        </div>
    )
}