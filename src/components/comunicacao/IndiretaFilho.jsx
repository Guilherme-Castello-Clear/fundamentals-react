import React from 'react'

export default props => {
    const genIdd = () => parseInt(Math.random() * (20)) + 50;
    const genNerd = () => Math.random() > 0.5;

    return (
        <div>
            <input type="text" id='name'/>
            <button onClick={e => {props.clicked(document.getElementById('name').value, genIdd(), genNerd())}}>Fornecer Informações</button>
        </div>
    )
}